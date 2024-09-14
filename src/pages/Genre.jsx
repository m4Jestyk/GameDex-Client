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
            image="https://shorturl.at/EhvT6"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("adventure")}
            name="Adventure"
            image="https://shorturl.at/4PUkA"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("racing")}
            name="Racing"
            image="https://shorturl.at/AR8gx"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
        </Flex>
        <Flex wrap="wrap" justifyContent="center" gap={1}>
          <DevCard
            onClick={() => handleCardClick("stealth")}
            name="Stealth"
            image="https://shorturl.at/quv2H"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("strategy")}
            name="Strategy"
            image="https://shorturl.at/JQeA9"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("simulation")}
            name="Simulation"
            image="data:image/png;base64,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"
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
