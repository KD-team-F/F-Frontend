type TagProps = {
    label: string;
    className?: string;
    tagId: string;
    onClick?: () => void;
    isActive?: boolean;
};

export const Tag = ({ label, className = "", onClick, isActive = false }: TagProps) => {
    return (
        <div
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
        ${isActive ? 'bg-[#4169e1] text-white' : 'bg-gray-300 text-black'}
        ${onClick ? 'cursor-pointer hover:opacity-80' : ''}
        ${className}
      `}
        >
            {label}
        </div>
    );
};
