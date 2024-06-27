// components/Card.tsx
import { Image } from '@chakra-ui/react';
import React from 'react';

interface CardProps {
    iconUrl: string;
    title: string;
    description: string;
}

const BitreonFeatureCard: React.FC<CardProps> = ({ iconUrl, title, description }) => {
    return (

        <div className="relative p-5 bg-[#040A24] text-white flex flex-col items-center space-y-4 rounded-lg">
            <div className="absolute inset-0 border-2 rounded-lg -m-3" style={{
                borderImage: 'linear-gradient(45deg, #3182ce, #38b2ac) 1',
            }}></div>
            <div className="flex-shrink-0 z-10 ">
                <Image
                    className="object-contain"
                    src={iconUrl}
                    alt={"Bitreon Cloud"}
                    w={12} // Set width and height as needed
                    h={12} // Set width and height as needed
                />
            </div>
            <div className="text-lg font-medium z-10">{title}</div>
            <div className="text-center text-sm text-gray-300 z-10">{description}</div>
        </div>

    );
};

export default BitreonFeatureCard;
