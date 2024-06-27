// components/NodeTree.tsx
import { BitreonCard } from '@/components/Cards';
import React from 'react';

interface Node {
    id: number;
    title: string;
    iconUrl: string;
    children?: Node[];
}

const nodesData: Node[] = [
    {
        id: 1,
        title: 'Lorem ipssum',
        iconUrl: '/path/to/icon1.png',
        children: [
            {
                id: 2,
                title: 'Lorem ipssum',
                iconUrl: '/path/to/icon1.png',
                children: [
                    {
                        id: 3,
                        title: 'Lorem ipssum',
                        iconUrl: '/path/to/icon1.png',
                    },
                    {
                        id: 4,
                        title: 'Lorem ipssum',
                        iconUrl: '/path/to/icon1.png',
                    },
                ],
            },
            {
                id: 5,
                title: 'Lorem ipssum',
                iconUrl: '/path/to/icon1.png',
                children: [
                    {
                        id: 6,
                        title: 'Lorem ipssum',
                        iconUrl: '/path/to/icon1.png',
                    },
                    {
                        id: 7,
                        title: 'Lorem ipssum',
                        iconUrl: '/path/to/icon1.png',
                    },
                ],
            },
        ],
    },
];

const renderNodes = (nodes: Node[], level: number = 0, isLast: boolean = false) => {
    return (
        <div className="flex items-center space-x-8">
            {nodes.map((node, index) => (
                <div key={node.id} className="flex flex-col items-center relative">
                    <BitreonCard title={node.title} iconUrl={node.iconUrl} />
                    {node.children && (
                        <div className="flex flex-col items-center mt-4 relative">
                            {index > 0 && (
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full h-0.5 w-4 bg-orange-500"></div>
                            )}
                            <div className="h-4 w-4 rounded-full bg-orange-500"></div>
                            <div className={`h-0.5 w-full bg-orange-500 ${isLast && index === nodes.length - 1 ? 'hidden' : ''}`}></div>
                            <div className="flex space-x-8 mt-4">
                                {renderNodes(node.children, level + 1, index === nodes.length - 1)}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};




const DifferSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            {renderNodes(nodesData, 0, true)}
        </div>

    );
};

export default DifferSection;
