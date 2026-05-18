import { Header } from "@/components/layouts/Header/Header";
import { Footer } from "@/components/layouts/Footer/Footer";
import { ArticleRanking } from "@/features/article/components/ArticleRanking/ArticleRanking";
import { getArticleRanking } from "@/features/article/actions/getArticleRanking";
import type { ArticleItem } from "@/types/articleItem";

export default async function RankingPage() {
  let questionItems: ArticleItem[] = [];
  let workItems: ArticleItem[] = [];
  try {
    ({ questionItems, workItems } = await getArticleRanking());
  } catch (error) {
    console.error(error);
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ArticleRanking questionItems={questionItems} workItems={workItems} />
      </main>
      <Footer />
    </div>
  );
}
