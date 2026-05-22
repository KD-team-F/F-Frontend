"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type BackButtonProps = {
  href: string;
};

export default function BackButton({ href }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push(href);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="p-2 rounded-full hover:bg-gray-200 transition"
    >
      <ArrowLeft size={20} />
    </button>
  );
}
