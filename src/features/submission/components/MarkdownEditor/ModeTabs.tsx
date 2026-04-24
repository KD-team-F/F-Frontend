import { PencilIcon } from "@/components/assets/PencilIcon";
import { EyeIcon } from "@/components/assets/EyeIcon";
import type { EditorMode } from "@/features/submission/types/EditorMode";

type ModeTabsProps = {
  mode: EditorMode;
  onChange: (mode: EditorMode) => void;
};

const activeStyle = 
  "bg-white text-[#4a6bff] border border-black/80 shadow-sm";
const inactiveStyle =
  "text-gray-500 hover:text-gray-700 border border-transparent";

export function ModeTabs({ mode, onChange }: ModeTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="表示モード切り替え"
      className="flex items-center gap-1 p-1 rounded-lg bg-white/60"
    >
      <button
        type="button"
        role="tab"
        aria-selected={mode === "edit"}
        onClick={() => onChange("edit")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${mode === "edit" ? activeStyle : inactiveStyle}`}
      >
        <PencilIcon />
        編集
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={mode === "preview"}
        onClick={() => onChange("preview")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${mode === "preview" ? activeStyle : inactiveStyle}`}
      >
        <EyeIcon />
        プレビュー
      </button>
    </div>
  );
}
