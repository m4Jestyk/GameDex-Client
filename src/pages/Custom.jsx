import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
  useColorModeValue,
  HStack,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import Game from "../components/Game";

const Custom = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [developer, setDeveloper] = useState("");
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
            const res = await axios.post(
            `${import.meta.env.VITE_SERVER}/customfind`,
            {
                name,
                genre,
                platform,
                developer,
            },
            {
                headers: {
                "content-type": "application/json",
                },
            }
            );
        
            const data = await res.data;
            setGames(data);
    } catch (error) {
        console.log("Error fetching games : ", error);
    } finally {
        setLoading(false);
    }
  };

  const bgGradient = useColorModeValue(
    "linear(to-r, gray.200, gray.300)",
    "linear(to-r, gray.800, gray.900)"
  );
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("black", "white");

  return (
    <VStack spacing={4} w="100%" maxW="800px" mx="auto" mt={10}>
      <HStack spacing={4} w="100%">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <Input
          placeholder="Platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
        <Input
          placeholder="Developer"
          value={developer}
          onChange={(e) => setDeveloper(e.target.value)}
        />
      </HStack>

      <Button colorScheme="teal" onClick={handleSearch}>
        Let's Go
      </Button>

      {
        <Box
          p={8}
          minH="100vh"
          bgGradient={bgGradient}
          color={textColor}
          maxW="200vw"
        >
          <Heading
            as="h1"
            mb={8}
            textAlign="center"
            fontSize="4xl"
            fontFamily="heading"
          >
            Game List
          </Heading>

          {loading ? (
            <Flex justify="center" align="center" h="50vh">
              <PacmanLoader color={textColor} size={75} />
            </Flex>
          ) : (
            <Box>
              {games.length > 0 ? (
                <Grid
                  templateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                  }}
                  gap={6}
                >
                  {games.map((game, index) => (
                    <GridItem
                      key={index}
                      p={4}
                      bg={cardBg}
                      borderRadius="lg"
                      boxShadow="lg"
                      transition="transform 0.2s"
                      _hover={{ transform: "scale(1.05)" }}
                    >
                      <Game
                        name={game.name}
                        producer={game.producer}
                        developer={game.developer}
                        date={game.date}
                        operating_system={game.operating_system}
                        genre={game.genre}
                      />
                    </GridItem>
                  ))}
                </Grid>
              ) : (
                <Text fontSize="lg" textAlign="center" mt={8}>
                  No games available
                </Text>
              )}
            </Box>
          )}
        </Box>
      }
    </VStack>
  );
};

export default Custom;
