import { Header } from "@/components/layouts/Header/Header";
import { Footer } from "@/components/layouts/Footer/Footer";
import { ArticleRanking } from "@/features/article/components/ArticleRanking/ArticleRanking";

export default function RankingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ArticleRanking />
      </main>
      <Footer />
    </div>
  );
}
