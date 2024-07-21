import React from 'react';
import { Box, Flex, Text, useDisclosure, Collapse } from '@chakra-ui/react';
import { RightOutlined, DownOutlined, DownSquareFilled, UpCircleFilled, DownCircleFilled } from '@ant-design/icons';
import { motion } from 'framer-motion';

const faqDatas = [
    {
        question: "Q1: How does Bitreon’s Web App ecosystem work?",
        answer: "A1: Bitreon’s Web App leverages cutting-edge technology to streamline web deployment. Users can automate workflows, utilize AI for optimization, monitor deployments in real-time, and scale applications effortlessly through a user-friendly interface."
    },
    {
        question: "Q2: What makes Bitreon different from other deployment platforms?",
        answer: "A2: Bitreon stands out with its dual ecosystem of a powerful Web App and an AI App, AI-driven optimization, robust security measures, global server network, and user-centric design. These features provide a seamless, efficient, and secure deployment experience that is unmatched in the industry."
    },
    {
        question: "Q3: How does AI enhance the deployment process in Bitreon?",
        answer: "A3: Bitreon uses advanced AI to optimize deployment tasks, predict potential issues, and provide intelligent recommendations. This ensures efficient deployments, enhanced performance, and better decision-making through actionable insights."
    },
    {
        question: "Q4: Is Bitreon secure?",
        answer: "A4: Yes, security is a top priority for Bitreon. We implement end-to-end encryption, conduct regular security audits, and employ robust security protocols to protect your data and applications throughout the deployment process."
    },
    {
        question: "Q5: Can I use Bitreon for large-scale projects?",
        answer: "A5: Absolutely! Bitreon is designed to handle projects of all sizes. Its scalable architecture allows you to seamlessly expand your web applications to meet growing demands without compromising performance."
    },
    {
        question: "Q5: Can I collaborate with my team on Bitreon?",
        answer: "A5: Yes, Bitreon includes collaboration tools that allow you to work seamlessly with your team. Manage permissions, assign roles, and collaborate on projects efficiently through our platform."
    }
];

interface FAQItemProps {
    question: string;
    answer: string;
}


const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box mb={8}>
            <Box
                bg={"#24273C"}
                p={4}
                style={{
                    clipPath: `polygon(0 0, ${isOpen ? "92%" : "92%"} 0, 100% ${isOpen ? "30%" : "40%"}, 100% 100%, 0 100%)`,
                }}
                _hover={{
                    boxShadow: "0 0 20px 5px rgba(49, 130, 206, 0.5), 0 0 20px 5px rgba(56, 178, 172, 0.5)",
                    transition: "box-shadow 0.3s ease-in-out",
                }}
                onClick={onToggle}
                cursor="pointer"
            >
                <Box
                    bg="#24273C"
                    p={4}
                    style={{
                        clipPath: `polygon(0 0, ${isOpen ? "92%" : "92%"} 0, 100% ${isOpen ? "30%" : "40%"}, 100% 100%, 0 100%)`,
                        height: '100%', // Ensure the inner box stretches to fit the outer box
                    }}
                >
                    <Flex
                        direction={"row"}
                        align={"center"}
                        justify={"space-between"}
                    >

                        <Flex w={"70%"} direction={"column"} align="start" justify="space-between">
                            <Text color="white" fontWeight={"bold"}>{question}</Text>
                            <Collapse in={isOpen} animateOpacity>
                                <Box mt={4} color="whiteAlpha.800">
                                    {answer}
                                </Box>
                            </Collapse>

                        </Flex>
                        <Box as="span" color="#FD8B1A">
                            {isOpen ? <UpCircleFilled /> : <DownCircleFilled />}
                        </Box>
                    </Flex>


                </Box>
            </Box>
        </Box>
    );
};

const FAQSection = () => {
    return (
        <Box py={10}>
            <Text fontSize={{ base: '4xl', lg: '6xl' }} fontWeight="bold" textAlign="center" mb={12} color="white">
                FAQ
            </Text>
            <Box maxW="800px" w={{ lg: '1000px' }} mx="auto" px={4}>
                {faqDatas.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: index * 0.15 }} // Smoother animation
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        <FAQItem question={faq.question} answer={faq.answer} />
                    </motion.div>
                ))}
            </Box>
        </Box>
    );
};

export default FAQSection;