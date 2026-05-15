import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, '')   // コードブロック
    .replace(/`([^`]+)`/g, '$1')      // インラインコード
    .replace(/#{1,6}\s+/g, '')        // 見出し
    .replace(/\*\*(.+?)\*\*/g, '$1') // 太字
    .replace(/\*(.+?)\*/g, '$1')     // 斜体
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // リンク
    .replace(/^[-*]\s+/gm, '')       // 箇条書き
    .replace(/^\d+\.\s+/gm, '')      // 番号リスト
    .replace(/^>\s+/gm, '')          // 引用
    .replace(/\n{2,}/g, ' ')         // 連続改行をスペースに
    .replace(/\n/g, ' ')             // 改行をスペースに
    .trim()
}
