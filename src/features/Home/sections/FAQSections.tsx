import React from 'react';
import { Box, Flex, Text, useDisclosure, Collapse } from '@chakra-ui/react';
import { RightOutlined, DownOutlined, DownSquareFilled, UpCircleFilled, DownCircleFilled } from '@ant-design/icons';
import { motion } from 'framer-motion';

const faqDatas = [
    {
        question: "Q1: Lorem ipsum dolor sit amet consectetur?",
        answer: "A1: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, laudantium tempore! Iure quia veniam dolore ut eius consequatur quaerat suscipit et dicta? Beatae fuga odio laboriosam deserunt debitis neque vitae!"
    },
    {
        question: "Q2: Lorem ipsum dolor sit amet consectetur?",
        answer: "A2: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, laudantium tempore! Iure quia veniam dolore ut eius consequatur quaerat suscipit et dicta? Beatae fuga odio laboriosam deserunt debitis neque vitae! "
    },
    {
        question: "Q3: Lorem ipsum dolor sit amet consectetur?",
        answer: "A3: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, laudantium tempore! Iure quia veniam dolore ut eius consequatur quaerat suscipit et dicta? Beatae fuga odio laboriosam deserunt debitis neque vitae! "
    },
    {
        question: "Q4: Lorem ipsum dolor sit amet consectetur?",
        answer: "A4: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, laudantium tempore! Iure quia veniam dolore ut eius consequatur quaerat suscipit et dicta? Beatae fuga odio laboriosam deserunt debitis neque vitae! "
    },
    {
        question: "Q5: Lorem ipsum dolor sit amet consectetur?",
        answer: "A5: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, laudantium tempore! Iure quia veniam dolore ut eius consequatur quaerat suscipit et dicta? Beatae fuga odio laboriosam deserunt debitis neque vitae! "
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