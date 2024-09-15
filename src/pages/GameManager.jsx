import React, { useState } from 'react';
import { Box, Text, useColorModeValue, Flex } from '@chakra-ui/react';
import axios from 'axios';
import ActionButtons from '../components/ActionButtons';
import GameForm from '../components/GameForm';
import DeleteForm from '../components/DeleteForm';

const GameManager = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [activeForm, setActiveForm] = useState(null);

  const [game, setGame] = useState({
    name: "",
    producer: "",
    developer: "",
    date: "",
    operating_system: "",
    genre: ""
  });
  
  const [gameId, setGameId] = useState("");

  const bgGradient = useColorModeValue('linear(to-r, gray.200, gray.300)', 'linear(to-r, gray.800, gray.900)');
  const textColor = useColorModeValue('black', 'white');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };

  const addGame = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:8080/api/v1/games', game);
      setMessage("Game added successfully!");
    } catch (error) {
      setMessage("Error adding game.");
    } finally {
      setLoading(false);
    }
  };

  const updateGame = async () => {
    setLoading(true);
    try {
      await axios.put(`http://localhost:8080/api/v1/games/${gameId}`, game);
      setMessage("Game updated successfully!");
    } catch (error) {
      setMessage("Error updating game.");
    } finally {
      setLoading(false);
    }
  };

  const deleteGame = async () => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:8080/api/v1/games/${gameId}`);
      setMessage("Game deleted successfully!");
    } catch (error) {
      setMessage("Error deleting game.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={8} minH="100vh" bgGradient={bgGradient} color={textColor}>
      {/* Action Buttons */}
      <ActionButtons setActiveForm={setActiveForm} />

      {/* Add Game Form */}
      {activeForm === 'add' && (
        <GameForm
          game={game}
          handleInputChange={handleInputChange}
          submitAction={addGame}
          loading={loading}
          formTitle="Add Game"
        />
      )}

      {/* Update Game Form */}
      {activeForm === 'update' && (
        <GameForm
          game={game}
          handleInputChange={handleInputChange}
          submitAction={updateGame}
          loading={loading}
          formTitle="Update Game"
        />
      )}

      {/* Delete Game Form */}
      {activeForm === 'delete' && (
        <DeleteForm
          gameId={gameId}
          setGameId={setGameId}
          deleteAction={deleteGame}
          loading={loading}
        />
      )}

      {/* Display messages */}
      {message && (
        <Flex justify="center" align="center" mt={8}>
          <Text fontSize={{ base: 'md', md: 'lg' }}>{message}</Text>
        </Flex>
      )}
    </Box>
  );
};

export default GameManager;
