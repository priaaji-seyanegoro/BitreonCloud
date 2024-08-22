import React from 'react';
import Image from 'next/image';

interface BitreonCardProps {
    title: string;
    iconUrl: string;
}

const BitreonCard: React.FC<BitreonCardProps> = ({ title, iconUrl }) => {
    return (
        <div className="h-30 w-60 bg-slate-700 text-white p-5 flex-col items-center space-y-4"
            style={{
                clipPath: 'polygon(0 0, 88% 0, 100% 30%, 100% 100%, 0 100%)',
                // clipPath: 'polygon(0 0, 88% 0, 100% 35%, 100% 100%, 10% 100%, 0 70%)',
            }}>
            <div className="flex-shrink-0">
                <Image src={iconUrl} alt={title} width={30} height={30} />
            </div>
            <div className="text-lg font-medium">{title}</div>
        </div>
    );
};

export default BitreonCard;
