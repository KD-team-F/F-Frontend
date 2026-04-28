import React from "react";

type TagProps = {
    label: string;
    className?: string;
    tagId: string;
    onClick?: () => void;
    isActive?: boolean;
};

export const Tag = ({ label, className = "", onClick, isActive = false }: TagProps) => {
    return (
        <button
            onClick={onClick}
            className={`
        inline-flex
        items-center
        justify-center
        px-6
        py-2
        rounded-full
        text-base
        font-medium
        cursor-pointer
        transition-colors
        ${isActive ? "bg-gray-700 text-white" : "bg-gray-300 text-black hover:bg-gray-400"}
        ${className}
      `}
        >
            {label}
        </button>
    );
};
