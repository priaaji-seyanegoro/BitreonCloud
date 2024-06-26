
import React from 'react';

interface BitreonButtonProps {
    text: string;
    onClick: () => void;
}

const BitreonButton: React.FC<BitreonButtonProps> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-amber-500 h-12 w-auto text-white px-10 py-2 rounded-none relative overflow-hidden hover:bg-amber-600 active:bg-amber-700 transition duration-200 ease-in-out transform active:scale-95"
            style={{
                // clipPath: 'polygon(0 0, 85% 0, 100% 42.5%, 100% 100%, 0 100%)',
                clipPath: 'polygon(0 0, 88% 0, 100% 35%, 100% 100%, 10% 100%, 0 70%)',
            }}
        >
            {text}
        </button>
    );
};

export default BitreonButton;
