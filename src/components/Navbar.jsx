import React from 'react'
import { 
  Container, 
  Flex, 
  useColorMode, 
  HStack, 
  Text, 
  Button,
  Box,
  useColorModeValue,
  Spacer
} from '@chakra-ui/react';
import { PlusSquareIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const location = useLocation();
    const bg = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    
    const NavLink = ({ to, children }) => (
      <Button
        as={Link}
        to={to}
        variant={location.pathname === to ? "solid" : "ghost"}
        colorScheme={location.pathname === to ? "blue" : "gray"}
        size="sm"
        borderRadius="full"
        fontWeight="medium"
      >
        {children}
      </Button>
    );

  return (
    <Box 
      bg={bg} 
      borderBottom="1px" 
      borderColor={borderColor}
      shadow="sm"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Container maxW={"7xl"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
            bgGradient='linear(to-r, blue.400, purple.500, pink.500)'
            bgClip='text'
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight='extrabold'
            letterSpacing="tight"
          >
            <Link to={'/'}>PRODUCT STORE 🏬</Link>
          </Text>
          
          <Spacer />
          
          <HStack spacing={2}>
            <NavLink to="/">
              <HStack spacing={1}>
                <FaHome />
                <Text display={{ base: "none", md: "block" }}>Home</Text>
              </HStack>
            </NavLink>
            
            <NavLink to="/products">
              <HStack spacing={1}>
                <FaShoppingBag />
                <Text display={{ base: "none", md: "block" }}>Products</Text>
              </HStack>
            </NavLink>
            
            <Button
              as={Link}
              to="/create"
              colorScheme="blue"
              size="sm"
              borderRadius="full"
              leftIcon={<PlusSquareIcon />}
            >
              <Text display={{ base: "none", md: "block" }}>Add Product</Text>
            </Button>
            
            <Button onClick={toggleColorMode} size="sm" borderRadius="full">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar