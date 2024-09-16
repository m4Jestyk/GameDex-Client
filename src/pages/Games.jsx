import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Game from '../components/Game';
import { PacmanLoader } from 'react-spinners';
import { Box, Heading, Text, Flex, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
 
const Games = () => {
  const name = useSelector((state) => state.game.name);
  const genre = useSelector((state) => state.game.genre);
  const developer = useSelector((state) => state.game.developer);
  const toFind = useSelector((state) => state.find.toFind);
  
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);

  const fetchGamesByDev = async () => {
    setLoading(true);

    const minLoadingTime = new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const devResponse = await axios.get(`${import.meta.env.VITE_SERVER}?developer=${developer}`);
      const devGames = devResponse.data;

      const prodResponse = await axios.get(`${import.meta.env.VITE_SERVER}?producer=${developer}`);
      const prodGames = prodResponse.data;

      await minLoadingTime;
      setGames([...devGames, ...prodGames]);

      console.log('Combined Games:', [...devGames, ...prodGames]);
    } catch (error) {
      console.error('Error fetching games:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchGamesByName = async () => {
    setLoading(true);
    console.log(name);

    const minLoadingTime = new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const devResponse = await axios.get(`${import.meta.env.VITE_SERVER}?name=${name}`);
      const devGames = devResponse.data;

      setGames([...devGames]);
    } catch (error) {
      console.error('Error fetching games:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchGamesByGenre = async () => {
    setLoading(true);
    console.log(name);

    const minLoadingTime = new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const devResponse = await axios.get(`${import.meta.env.VITE_SERVER}?genre=${genre}`);
      const devGames = devResponse.data;

      setGames([...devGames]);
    } catch (error) {
      console.error('Error fetching games:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (developer && toFind == "dev") {
      fetchGamesByDev();
    } else if(toFind == "name")
    {
      fetchGamesByName();
    } else if(toFind == "genre")
    {
      fetchGamesByGenre();
    }
  }, [developer]);

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

export default Games;
