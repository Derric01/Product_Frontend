import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Image,
  useColorModeValue,
  Icon,
  Flex,
  Badge,
  Stack
} from "@chakra-ui/react";
import { FaShoppingCart, FaRocket, FaStar, FaHeart } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const LandingPage = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const accentColor = useColorModeValue("blue.500", "blue.300");

  const features = [
    {
      icon: FaRocket,
      title: "Fast & Reliable",
      description: "Lightning-fast product management with real-time updates"
    },
    {
      icon: FaHeart,
      title: "User Friendly",
      description: "Intuitive interface designed for the best user experience"
    },
    {
      icon: FaStar,
      title: "Top Quality",
      description: "Premium products curated for tech enthusiasts"
    }
  ];

  const stats = [
    { number: "10K+", label: "Products" },
    { number: "50K+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Container maxW="7xl" py={20}>
        <MotionFlex
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          minH="70vh"
        >
          {/* Left Content */}
          <VStack
            spacing={8}
            align={{ base: "center", lg: "flex-start" }}
            flex={1}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Badge
              colorScheme="blue"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
            >
              🚀 New Products Added Daily
            </Badge>
            
            <Heading
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="bold"
              lineHeight="shorter"
              bgGradient="linear(to-r, blue.400, purple.500, pink.500)"
              bgClip="text"
            >
              The Ultimate
              <br />
              Product Store
            </Heading>
            
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={textColor}
              maxW="600px"
            >
              Discover amazing tech products, manage your inventory with ease, 
              and experience the future of e-commerce. Built with modern technology 
              for modern needs.
            </Text>
            
            <HStack spacing={4}>
              <Button
                as={RouterLink}
                to="/products"
                size="lg"
                colorScheme="blue"
                rounded="full"
                px={8}
                leftIcon={<FaShoppingCart />}
                _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
                transition="all 0.2s"
              >
                Shop Now
              </Button>
              
              <Button
                as={RouterLink}
                to="/create"
                size="lg"
                variant="outline"
                colorScheme="blue"
                rounded="full"
                px={8}
                _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
                transition="all 0.2s"
              >
                Add Product
              </Button>
            </HStack>
          </VStack>

          {/* Right Content - Hero Image */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            flex={1}
            mt={{ base: 16, lg: 0 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center"
              alt="Hero Image"
              borderRadius="2xl"
              shadow="2xl"
              w="full"
              h={{ base: "300px", md: "400px" }}
              objectFit="cover"
            />
          </MotionBox>
        </MotionFlex>
      </Container>

      {/* Stats Section */}
      <Box bg={bgColor} py={16}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
            {stats.map((stat, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                textAlign="center"
              >
                <Text fontSize="4xl" fontWeight="bold" color={accentColor}>
                  {stat.number}
                </Text>
                <Text color={textColor} fontSize="lg">
                  {stat.label}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="7xl" py={20}>
        <VStack spacing={16}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            textAlign="center"
          >
            <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
              Why Choose Our Platform?
            </Heading>
            <Text fontSize="xl" color={textColor} maxW="600px">
              We provide the best tools and features to manage your products efficiently
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12} w="full">
            {features.map((feature, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                bg={bgColor}
                p={8}
                borderRadius="2xl"
                shadow="xl"
                textAlign="center"
                _hover={{ transform: "translateY(-5px)", shadow: "2xl" }}
                style={{ transition: "all 0.3s" }}
              >
                <Box
                  bg={accentColor}
                  color="white"
                  w={16}
                  h={16}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={6}
                >
                  <Icon as={feature.icon} boxSize={8} />
                </Box>
                <Heading size="lg" mb={4}>
                  {feature.title}
                </Heading>
                <Text color={textColor} fontSize="lg">
                  {feature.description}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* CTA Section */}
      <Box bg={accentColor} color="white" py={20}>
        <Container maxW="4xl" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={6}>
              Ready to Get Started?
            </Heading>
            <Text fontSize="xl" mb={8} opacity={0.9}>
              Join thousands of users who are already managing their products efficiently
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              justify="center"
            >
              <Button
                as={RouterLink}
                to="/products"
                size="lg"
                bg="white"
                color={accentColor}
                rounded="full"
                px={8}
                _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
                transition="all 0.2s"
              >
                View Products
              </Button>
              <Button
                as={RouterLink}
                to="/create"
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                rounded="full"
                px={8}
                _hover={{ 
                  bg: "white", 
                  color: accentColor,
                  transform: "translateY(-2px)", 
                  shadow: "lg" 
                }}
                transition="all 0.2s"
              >
                Add Your Product
              </Button>
            </Stack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
