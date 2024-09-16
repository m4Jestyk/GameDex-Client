import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Game from '../components/Game';
import { PacmanLoader } from 'react-spinners';
import { Box, Heading, Text, Flex, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';

const Retro = () => {

  const toFind = useSelector((state) => state.find.toFind);
  
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);

  const fetchRetro = async() => {
    setLoading(true);
    try {
        
        const res = await axios.get(`${import.meta.env.VITE_SERVER}/retro`);
        const data = res.data;
        setGames([...data]);

    } catch (error) {
        console.log("Error while fetching games : ", error);
    } finally{
        setLoading(false);
    }
  }

  

  useEffect(() => {
    fetchRetro();
  }, []);

  const bgGradient = useColorModeValue('linear(to-r, gray.200, gray.300)', 'linear(to-r, gray.800, gray.900)');
  const cardBg = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('black', 'white');

  return (
    <Box p={8} minH="100vh" bgGradient={bgGradient} color={textColor}>
      <Heading as="h1" mb={8} textAlign="center" fontSize="4xl" fontFamily="heading">
        Game List
      </Heading>

      {loading ? (
        <Flex justify="center" align="center" h="50vh">
          <PacmanLoader color={textColor} size={75} />
        </Flex>
      ) : (
        <Box>
          {games.length > 0 ? (
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
              {games.map((game, index) => (
                <GridItem key={index} p={4} bg={cardBg} borderRadius="lg" boxShadow="lg" transition="transform 0.2s" _hover={{ transform: 'scale(1.05)' }}>
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
  );
};

export default Retro;
