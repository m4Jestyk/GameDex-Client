import React, { useState } from "react";
import { Box, Text, useColorModeValue, Flex, Button, Input } from "@chakra-ui/react";
import axios from "axios";
import ActionButtons from "../components/ActionButtons";
import GameForm from "../components/GameForm";
import DeleteForm from "../components/DeleteForm";

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
    genre: "",
  });

  const [gameId, setGameId] = useState("");

  const bgGradient = useColorModeValue(
    "linear(to-r, gray.200, gray.300)",
    "linear(to-r, gray.800, gray.900)"
  );
  const textColor = useColorModeValue("black", "white");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };

  const addGame = async () => {
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_SERVER}/addgame`, game);
      setMessage("Game added successfully!");
      setGame({
        name: "",
        producer: "",
        developer: "",
        date: "",
        operating_system: "",
        genre: "",
      }); 
    } catch (error) {
      setMessage("Error adding game.");
    } finally {
      setLoading(false);
    }
  };

  const fetchGameById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER}/${id}`);
      setGame(response.data); 
      setMessage(`Game with ID ${id} fetched successfully!`);
    } catch (error) {
      setMessage("Error fetching game.");
      setGame({
        name:"",
        producer:"",
        developer:"",
        date:"",
        operating_system:"",
        genre:""
      })
    } finally {
      setLoading(false);
    }
  };

  const updateGame = async () => {
    if (!gameId) {
      setMessage("Please enter a valid game ID to update.");
      return;
    }

    setLoading(true);
    try {
      await axios.put(`${import.meta.env.VITE_SERVER}`, {
        gameId,
        ...game
      });
      setMessage("Game updated successfully!");
      setGame({
        name: "",
        producer: "",
        developer: "",
        date: "",
        operating_system: "",
        genre: "",
      });
    } catch (error) {
      console.log(error);
      setMessage("Error updating game.");
    } finally {
      setLoading(false);
    }
  };

  const deleteGame = async () => {
    setLoading(true);
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER}/${gameId}`);
      setMessage("Game deleted successfully!");

    } catch (error) {
      setMessage("Error deleting game.");
      setGameId("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={8} minH="100vh" bgGradient={bgGradient} color={textColor}>
      <ActionButtons setActiveForm={setActiveForm} />

      {message && (
        <Flex justify="center" align="center" mt={8}>
          <Text fontSize={{ base: "md", md: "lg" }}>{message}</Text>
        </Flex>
      )}

      {activeForm === "add" && (
        <GameForm
          game={game}
          handleInputChange={handleInputChange}
          submitAction={addGame}
          loading={loading}
          formTitle="Add Game"
        />
      )}

      {activeForm === "update" && (
        <>
          {/* Input field for entering Game ID */}
          <Flex justify="center" align="center" mt={4}>
            <Input
              placeholder="Enter Game ID"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
              w="300px"
              mr={2}
            />
            <Button
              onClick={() => fetchGameById(gameId)}
              isLoading={loading}
              colorScheme="blue"
            >
              Fetch Game
            </Button>
          </Flex>

          {gameId && (
            <GameForm
              game={game}
              handleInputChange={handleInputChange}
              submitAction={updateGame}
              loading={loading}
              formTitle="Update Game"
            />
          )}
        </>
      )}

      {activeForm === "delete" && (
        <DeleteForm
          gameId={gameId}
          setGameId={setGameId}
          deleteAction={deleteGame}
          loading={loading}
        />
      )}
    </Box>
  );
};

export default GameManager;
