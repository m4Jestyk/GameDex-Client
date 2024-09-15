import React, { useState, useEffect } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setDeveloper, setName } from "../redux/slices/fieldSlice";
import { setToFind } from "../redux/slices/findSlice";
import DevCard from "../components/DevCard";
import { useNavigate } from "react-router-dom";

const Franchise = () => {
  const [input, setInput] = useState("");
  const developer = useSelector((state) => state.game.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setName(input));
    dispatch(setToFind("name"));  
    navigate("result");
  };

  const handleCardClick = (name) => {
    dispatch(setName(name));
    dispatch(setToFind("name")); 
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
            onClick={() => handleCardClick("assassin's+creed")}
            navigateTo="result"
            name="Assassin's Creed"
            image="/assets/assassin.jpg"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("call+of+duty")}
            name="Call of Duty"
            image="/assets/cod.jpeg"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("final+fantasy")}
            name="Final Fantasy"
            image="/assets/final_fantasy.webp"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
        </Flex>
        <Flex wrap="wrap" justifyContent="center" gap={1}>
          <DevCard
            onClick={() => handleCardClick("god+of+war")}
            name="God of War"
            image="/assets/gow.jpg"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("grand+theft+auto")}
            name="Grand Theft Auto"
            image="/assets/gta.png"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("far+cry")}
            name="Far Cry"
            image="/assets/farcry.png"
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

export default Franchise;
