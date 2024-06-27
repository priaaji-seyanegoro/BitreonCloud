import React from 'react';

interface FrostedGlassCardProps {
    children: React.ReactNode;
    enableClipPath?: boolean;
}

const BitreonFrostedGlassCard: React.FC<FrostedGlassCardProps> = ({ children, enableClipPath = true }) => {
    const clipPathValue = 'polygon(0 0, 88% 0, 100% 35%, 100% 100%, 10% 100%, 0 70%)';

    return (
        <div className="relative p-5 bg-opacity-20 bg-white text-white flex flex-col items-center space-y-4 rounded-none overflow-hidden shadow-lg" style={{
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(10px)',
            clipPath: enableClipPath ? clipPathValue : 'none',
        }}>
            <div className="absolute inset-0 rounded-none" style={{
                clipPath: enableClipPath ? clipPathValue : 'none',
            }}></div>
            <div className="relative z-10 flex flex-col items-center space-y-4">
                {children}
            </div>
        </div>
    );
};

export default BitreonFrostedGlassCard;
