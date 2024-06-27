// components/FloatingComponent.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import useFloating from '@/hooks/useFloating';

interface FloatingProps {
    children: React.ReactNode;
}
const Floating: React.FC<FloatingProps> = ({ children }) => {
    const floating = useFloating();

    return (
        <Box
            position="relative"
            animation="floating 2s ease-in-out infinite"
            _hover={{
                animation: 'floating 2s ease-in-out infinite',
            }}
            sx={{
                '@keyframes floating': {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
            }}
        >
            {children}
        </Box>
    );
};

export default Floating;
