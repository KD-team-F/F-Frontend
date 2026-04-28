import React from "react";

type TagProps = {
    label: string;
    className?: string;
};

export const Tag = ({ label, className = "" }: TagProps) => {
    return (
        <div
            className={`
        inline-flex
        items-center
        justify-center
        px-6
        py-2
        rounded-full
        bg-gray-300
        text-black
        text-base
        font-medium
        ${className}
      `}
        >
            {label}
        </div>
    );
};