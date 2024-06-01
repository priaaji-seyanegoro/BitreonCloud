import React from 'react';
import { Box, Flex, Text, useDisclosure, Collapse } from '@chakra-ui/react';
import { RightOutlined, DownOutlined } from '@ant-design/icons';

const faqDatas = [
    {
        question: "Q1: What makes Power Link different from other VPN services?",
        answer: "A1: Power Link prioritizes your privacy with advanced encryption, a no-log policy, and a vast global server network, ensuring fast and secure connections."
    },
    {
        question: "Q2: How many devices can I connect with one Power Link account?",
        answer: "A2: You can connect multiple devices simultaneously under one Power Link account, providing comprehensive protection across all your devices."
    },
    {
        question: "Q3: Does Power Link keep any logs of my online activities?",
        answer: "A3: No, Power Link adheres to a strict no-log policy, ensuring that your browsing history and personal information are never recorded or shared."
    },
    {
        question: "Q4: How do I install Power Link on my device?",
        answer: "A4: Simply download the Power Link app from our website, follow the installation instructions, and configure your settings through our user-friendly interface."
    },
    {
        question: "Q5: What should I do if I encounter issues with my VPN connection?",
        answer: "A5: Our dedicated customer support team is available to assist you 24/7. Contact us through our website or app for prompt assistance."
    }
];

interface FAQItemProps {
    question: string;
    answer: string;
}


const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box mb={4} borderRadius="xl" bgGradient="linear(to-r, #3182ce, #38b2ac)" p="1px">
            <Box
                bg="black"
                p={4}
                borderRadius="xl"
            >
                <Flex align="center" justify="space-between" onClick={onToggle} cursor="pointer">
                    <Text color="white">{question}</Text>
                    <Box as="span" color="white">
                        {isOpen ? <DownOutlined /> : <RightOutlined />}
                    </Box>
                </Flex>
                <Collapse in={isOpen} animateOpacity>
                    <Box mt={4} pl={8} color="whiteAlpha.800">
                        {answer}
                    </Box>
                </Collapse>
            </Box>
        </Box>
    );
};

const FAQSection = () => {
    return (
        <Box bg="black" py={10}>
            <Text fontSize="6xl" fontWeight="bold" textAlign="center" mb={8} color="white">
                FAQ
            </Text>
            <Box w="1000px" mx="auto" px={4}>
                {faqDatas.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </Box>
        </Box>
    );
};

export default FAQSection;