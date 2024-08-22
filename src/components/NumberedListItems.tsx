import React from 'react';

interface NumberedListProps {
    items: string[];
}

const NumberedList: React.FC<NumberedListProps> = ({ items }) => {
    return (
        <div className="p-2 rounded-lg shadow-lg">
            <ol className="text-gray-300 space-y-2">
                {items.map((item, index) => (
                    <div key={index} className='flex flex-row space-x-2 items-start'>
                        <span className="text-sm text-amber-500">{index + 1}. </span>
                        <span key={index} className="leading-relaxed text-start text-xs">
                            {item}
                        </span>
                    </div>
                ))}
            </ol>
        </div>
    );
};

export default NumberedList;