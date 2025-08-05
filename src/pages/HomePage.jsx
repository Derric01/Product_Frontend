import { 
  Container, 
  SimpleGrid, 
  Text, 
  VStack, 
  Box,
  Heading,
  useColorModeValue,
  Flex,
  Spinner,
  Button,
  HStack,
  Badge
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const HomePage = () => {
    const { fetchProducts, products } = useProductStore();
    const [loading, setLoading] = useState(true);

    const bgColor = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.600", "gray.300");
    const headingColor = useColorModeValue("gray.800", "white");

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            await fetchProducts();
            setLoading(false);
        };
        loadProducts();
    }, [fetchProducts]);

    if (loading) {
        return (
            <Container maxW="7xl" py={20}>
                <Flex justify="center" align="center" minH="50vh">
                    <VStack spacing={4}>
                        <Spinner size="xl" color="blue.500" thickness="4px" />
                        <Text fontSize="lg" color={textColor}>Loading amazing products...</Text>
                    </VStack>
                </Flex>
            </Container>
        );
    }

    return (
        <Container maxW="7xl" py={12}>
            <VStack spacing={12}>
                {/* Header Section */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    textAlign="center"
                >
                    <Heading
                        fontSize={{ base: "3xl", md: "5xl" }}
                        fontWeight="bold"
                        bgGradient="linear(to-r, blue.400, purple.500, pink.500)"
                        bgClip="text"
                        mb={4}
                    >
                        Our Products Collection
                    </Heading>
                    <Text fontSize="xl" color={textColor} maxW="600px" mx="auto">
                        Discover our curated selection of premium tech products
                    </Text>
                    
                    <HStack justify="center" mt={6} spacing={4}>
                        <Badge colorScheme="blue" px={3} py={1} borderRadius="full">
                            {products.length} Products Available
                        </Badge>
                        <Badge colorScheme="green" px={3} py={1} borderRadius="full">
                            ✨ Premium Quality
                        </Badge>
                    </HStack>
                </MotionBox>

                {/* Products Grid */}
                {products.length > 0 ? (
                    <SimpleGrid
                        columns={{
                            base: 1,
                            md: 2,
                            lg: 3,
                            xl: 4,
                        }}
                        spacing={8}
                        w="full"
                    >
                        {products.map((product, index) => (
                            <MotionBox
                                key={product._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ProductCard product={product} />
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                ) : (
                    <MotionBox
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Box
                            bg={bgColor}
                            p={12}
                            borderRadius="2xl"
                            shadow="xl"
                            textAlign="center"
                            maxW="500px"
                            mx="auto"
                        >
                            <Text fontSize="6xl" mb={4}>📦</Text>
                            <Heading size="lg" mb={4} color={headingColor}>
                                No Products Found
                            </Heading>
                            <Text fontSize="lg" color={textColor} mb={8}>
                                It looks like there are no products available right now. 
                                Be the first to add an amazing product!
                            </Text>
                            <Button
                                as={Link}
                                to="/create"
                                colorScheme="blue"
                                size="lg"
                                borderRadius="full"
                                px={8}
                                _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
                                transition="all 0.2s"
                            >
                                Add Your First Product
                            </Button>
                        </Box>
                    </MotionBox>
                )}
            </VStack>
        </Container>
    );
};
export default HomePage;
