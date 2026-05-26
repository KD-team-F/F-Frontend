"use client";

import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";

export default function RefreshButton() {
  const router = useRouter();

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <button
      onClick={handleRefresh}
      className="p-2 rounded-full hover:bg-gray-200 transition"
    >
      <RefreshCw size={20} />
    </button>
  );
}

