import React from 'react';
import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { roadmapData, Phase, Step } from '../constants/roadmap'; // Adjust the import path as needed
import TextGradient from '@/components/Text/TextGradient';

const RoadmapStepper: React.FC = () => {
    return (
        <Box color="white" py={10} px={4}>
            <Flex direction="column" align="center" w="full" maxW="1200px" mx="auto">
                <PhaseSection phase={roadmapData} />
            </Flex>
        </Box>
    );
};

interface PhaseSectionProps {
    phase: Phase;
}

const PhaseSection: React.FC<PhaseSectionProps> = ({ phase }) => {
    return (
        <>
            {/* Phase Title and Subtitle */}


            {/* Steps */}
            <Flex direction="column" w="full" position="relative" align="center">
                <Text className='mb-16' fontSize={{ base: "4xl", lg: "6xl" }} fontWeight="bold" >ROADMAP</Text>
                {phase.steps.map((step, stepIndex) => (
                    <Flex
                        key={stepIndex}
                        direction={{ base: "row" }}
                        align="center"
                        position="relative"
                        zIndex={1}
                        px={{ base: 4, md: 0 }}
                    >
                        <StepperIndicator step={stepIndex + 1} />
                        <StepperStep step={step} />
                    </Flex>
                ))}
            </Flex>
        </>
    );
};

interface StepperStepProps {
    step: Step;
}

const StepperStep: React.FC<StepperStepProps> = ({ step }) => {
    return (
        <Box
            flex={{ base: 1, md: 1 }}
            ml={{ base: 8, md: 8 }}
            textAlign={{ base: "left", md: "left" }}
            maxW="600px"
        >
            <Text fontSize="2xl" fontWeight="bold">{step.title}</Text>
            <Text className='text-gray-500' fontSize="md" mt={2}><strong>Purpose:</strong> {step.purpose}</Text>
            <Text fontSize="md" mt={2}><strong>Features:</strong></Text>
            <Box pl={4} mt={1}>
                {step.features.map((feature, index) => (
                    <Text className='text-gray-500' key={index} fontSize="md">• {feature.description}</Text>
                ))}
            </Box>
        </Box>
    );
};

interface StepperIndicatorProps {
    step: number;
}

const StepperIndicator: React.FC<StepperIndicatorProps> = ({ step }) => {
    var stepItem = roadmapData.steps[step - 1];

    var isActive = stepItem.active;
    var subtitle = stepItem.subtitle

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (


        <Flex direction="row" align="center">

            {!isMobile && (
                <Flex direction="column" align="center" mt={10} mr={6}>
                    <Box textAlign="right" mb={8}>
                        {isActive ? (
                            <>
                                <TextGradient fontSize="xl" fontWeight="bold" gradient="linear(to-r, #d8b4fe, #818cf8, #38bdf8, #34d399)">
                                    {`Phase ${step}`}
                                </TextGradient>
                                <Text fontSize="xl">{subtitle}</Text>
                            </>
                        ) : (
                            <Box w="165px" />
                        )}
                    </Box>
                </Flex>
            )}

            <Flex direction="column" align="center" ml={{ md:isActive ? 1 : 0, xs:isActive ? 1 : 0}}>

                <Box
                    w="28px"
                    h="28px"
                    borderRadius="lg"
                    bg={isActive ? `linear-gradient(to right, #145BF5, #21C4D5)` : `gray`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    zIndex={2}
                >
                    <Text fontSize="sm" fontWeight="bold" color="white">{step}</Text>
                </Box>
                <Box
                    w="5px"
                    h="300px"
                    bg={step == roadmapData.steps.length ? '' : isActive ? `linear-gradient(to right, #145BF5, #21C4D5)` : `gray`}
                />
            </Flex>
        </Flex>

    );
};

export default RoadmapStepper;