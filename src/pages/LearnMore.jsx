import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LearnMore = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.500", "white");

  return (
    <Box bg={bgColor} minH="100vh" py={10} px={5}>
      <Stack spacing={8} maxW="900px" mx="auto" textAlign="center">
        <Heading as="h1" size="2xl" color={"green.400"}>
          Welcome to GameDex
        </Heading>
        <Text fontSize="sm" color={textColor}>
            HI! I am Atharv Joshi (m4Jestyk), the creator of GameDex :)
          GameDex is your ultimate destination for exploring and discovering a
          vast collection of games. Whether you're looking for classic games,
          indie gems, or the latest releases, our platform allows you to search,
          filter, and explore games based on genre, platform, developer, and
          more.
        </Text>
        <Text fontSize="sm" color={textColor}>
          This is just a personal project I created to practice and showcase my
          skills on various technologies I've been learning and working on and
          also to put something really good in my resume...
        </Text>
        <Text fontSize="sm" color={textColor}>
          This project is built around a theme which I have loved since my
          childhood and I will look back and it will be worth it a year down the
          road when everything will be good and in its place. Lets hope this
          project gets me a really good placement :)
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate("/category")}
        >
          Start Exploring
        </Button>
        <Text fontSize="2xs" color={textColor}>
          Oh and btw I'd love it if you followed me on LinkedIn <a href="https://www.linkedin.com/in/atharv-joshi-219442247/">(tap me)</a> and GitHub <a href="https://github.com/m4Jestyk">(me too)</a> 
        </Text>
        <Text fontSize="2xs" color={textColor}>
            ok see ya byi :3
        </Text>
      </Stack>
    </Box>
  );
};

export default LearnMore;
