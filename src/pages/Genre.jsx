import React, { useState, useEffect } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setDeveloper, setGenre, setName } from "../redux/slices/fieldSlice";
import { setToFind } from "../redux/slices/findSlice";
import DevCard from "../components/DevCard";
import { useNavigate } from "react-router-dom";

const Genre = () => {
  const [input, setInput] = useState("");
  const genre = useSelector((state) => state.game.genre);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setGenre(input));
    dispatch(setToFind("genre"));  
    navigate("result");
  };

  const handleCardClick = (genre) => {
    dispatch(setGenre(genre));
    dispatch(setToFind("genre")); 
    navigate("result");
  };


  return (
    <>
      <Flex
        m={"auto"}
        flexDirection={"column"}
        alignItems={"center"}
        maxW={"70vw"}
      >
        <Flex mb={-50} wrap="wrap" justifyContent="center" gap={1}>
          <DevCard
            onClick={() => handleCardClick("fps")}
            navigateTo="result"
            name="FPS"
            image="/assets/fps.jpg"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("adventure")}
            name="Adventure"
            image="/assets/adventure.jpg"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("racing")}
            name="Racing"
            image="/assets/racing.jpg"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
        </Flex>
        <Flex wrap="wrap" justifyContent="center" gap={1}>
          <DevCard
            onClick={() => handleCardClick("stealth")}
            name="Stealth"
            image="/assets/stealth.jpg"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("strategy")}
            name="Strategy"
            image="/assets/strategy.jpg"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("simulation")}
            name="Simulation"
            image = "/assets/simulation.jpg"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
        </Flex>
        <Flex
          direction="column"
          align="center"
          gap={4}
          mt={10}
          p={5}
          border="1px solid"
          borderColor="gray.300"
          borderRadius="md"
        >
          <Text fontSize="lg" fontWeight="bold">
            Other? Type it in...
          </Text>
          <input
            value={input}
            onChange={handleInput}
            placeholder="Developer"
            size="lg"
          />
          <Button
            onClick={handleSubmit}
            colorScheme="blue"
            size="lg"
            width="full"
          >
            Let's go!
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Genre;
