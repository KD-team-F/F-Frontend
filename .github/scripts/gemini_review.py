import os
import requests
import google.generativeai as genai
from github import Github

headers = {
    "Authorization": f"token {os.environ['GITHUB_TOKEN']}",
    "Accept": "application/vnd.github.diff",
}
diff_url = f"https://api.github.com/repos/{os.environ['REPO_FULL_NAME']}/pulls/{os.environ['PR_NUMBER']}"
diff = requests.get(diff_url, headers=headers).text

MAX_DIFF_SIZE = 100_000
truncated = len(diff) > MAX_DIFF_SIZE
if truncated:
    diff = diff[:MAX_DIFF_SIZE]

genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel(
    "gemini-3.1-pro-preview",
    system_instruction="あなたは日本語でコードレビューを行うレビュアーです。説明文・コメント・提案はすべて日本語で記述してください。ただし、変数名・関数名・クラス名・ファイル名などのコード上の識別子はそのまま英語で表記して構いません。",
)

truncated_note = "\n...(差分が長すぎるため一部省略されました)" if truncated else ""
prompt = f"""あなたは経験豊富なシニアソフトウェアエンジニアです。
以下のPR（プルリクエスト）の diff を詳しくレビューしてください。
**説明・提案・コメントは必ず日本語で記述してください。変数名・関数名・ファイル名などの識別子はそのまま英語で表記して構いません。**

## レビュー観点

1. **コードの品質** - 可読性・保守性・命名規則
2. **潜在的なバグ** - ロジックエラー・エッジケース
3. **パフォーマンス** - 最適化の機会
4. **セキュリティ** - 脆弱性や問題点
5. **改善提案** - より良い実装方法

良い点も積極的に指摘してください。
指摘事項は具体的なファイル名・行番号を含めて記載してください。

```diff
{diff}{truncated_note}
```"""

response = model.generate_content(prompt)
review_text = response.text

g = Github(os.environ["GITHUB_TOKEN"])
repo = g.get_repo(os.environ["REPO_FULL_NAME"])
pr = repo.get_pull(int(os.environ["PR_NUMBER"]))

comment_body = (
    "## 🤖 Gemini AI によるPRレビュー\n\n"
    + review_text
    + "\n\n"
    + "*このレビューはGemini AIによって自動生成されました*"
)

pr.create_issue_comment(comment_body)
print("Review posted successfully!")
