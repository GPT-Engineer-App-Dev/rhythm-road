import { Container, VStack, Heading, Text, Button, Image, Box } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to the Band's Tour</Heading>
        <Text fontSize="lg" textAlign="center">Join us on our journey across the world. Check out our tour dates and get your tickets now!</Text>
        <Button colorScheme="teal" size="lg">Get Tickets</Button>
        <Box boxSize="sm">
          <Image src="/path-to-your-image.jpg" alt="Band Image" objectFit="cover" />
        </Box>
        <VStack spacing={4}>
          <Heading as="h2" size="lg">Follow Us</Heading>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button as="a" href="https://facebook.com" target="_blank" leftIcon={<FaFacebook />} colorScheme="facebook" m={2}>Facebook</Button>
            <Button as="a" href="https://twitter.com" target="_blank" leftIcon={<FaTwitter />} colorScheme="twitter" m={2}>Twitter</Button>
            <Button as="a" href="https://instagram.com" target="_blank" leftIcon={<FaInstagram />} colorScheme="pink" m={2}>Instagram</Button>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;