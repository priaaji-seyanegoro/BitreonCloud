import {
    Box,
    Stack,
    HStack,
    Text,
    Heading,
    Divider,
    List,
    ListIcon,
    ListItem,
    Button
} from "@chakra-ui/react";

import { CheckCircleFilled } from "@ant-design/icons";
import PropTypes from "prop-types";

interface Props {
    popular?: boolean;
    name: string;
    features: any[];
    info?: string;
    price?: string
}

const PricingBox = (props: Props) => {
    return (
        <Stack
            color="black"
            spacing={2}
            border="3px solid"
            borderColor={props.popular ? "#58468C" : "gray.300"}
            borderRadius="0.7rem"
            p={4}
            h="350px"
            backgroundColor="white"
            position="relative"
        >
            {props.popular && (
                <Box
                    position="absolute"
                    top="0"
                    right="0"
                    backgroundColor="#58468C"
                    color="white"
                    paddingX={2}
                    paddingY={1}
                    borderRadius="0 0 0 0.7rem"
                    fontSize="0.8rem"
                >
                    POPULAR
                </Box>
            )}
            <Text textTransform="uppercase">{props.name}</Text>
            <HStack>
                <Heading>{props.price ?? "Free"}</Heading>
                {props.price && (
                    <Box as="span" color="gray.600" fontSize="sm">
                        / mo
                    </Box>
                )}
            </HStack>
            <Divider borderColor="blackAlpha.500" />
            <List flex="1">
                {props.features.map((feat) => (
                    <ListItem key={Math.random()}>
                        <ListIcon as={CheckCircleFilled} color="gray.400" />
                        {feat}
                    </ListItem>
                ))}
            </List>
            <Box>
                <Button
                    variant="solid"
                    size="md"
                    width="100%"
                    borderRadius={0}
                    textAlign="center"
                    alignContent="center"
                    display="flex"
                    justifyContent="space-between" rounded="md" bg="gray.400" color="black" _hover={{
                        background: "linear-gradient(#111114 0 0) padding-box, linear-gradient(152.64deg, #247be1 0%, #929BFF 100%) border-box",
                        color: "white",
                        border: "2px solid transparent"
                    }}>
                    Buy
                </Button>
                <Text fontSize="xs">{props.info}</Text>
            </Box>
        </Stack>
    );
};
PricingBox.propTypes = {
    name: PropTypes.string.isRequired,
    popular: PropTypes.bool,
    price: PropTypes.string,
    info: PropTypes.string,
    features: PropTypes.array.isRequired
};

export default PricingBox;
