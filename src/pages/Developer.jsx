import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setDeveloper } from "../redux/slices/fieldSlice";
import { setToFind } from "../redux/slices/findSlice";
import axios from "axios";
import DevCard from "../components/DevCard";
import { useNavigate } from "react-router-dom";

const Developer = () => {
  const [input, setInput] = useState("");
  const developer = useSelector((state) => state.game.developer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setDeveloper(input));
    dispatch(setToFind("dev"));  
    navigate("result");
  };

  const handleCardClick = (developerName) => {
    dispatch(setDeveloper(developerName));
    dispatch(setToFind("dev")); 
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
            onClick={() => handleCardClick("electronic+arts")}
            navigateTo="result"
            name="EA"
            image="/assets/ea.jpg"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("blizzard")}
            name="Blizzard"
            image="/assets/blizzard.png"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("rockstar")}
            name="Rockstar"
            image="/assets/rockstar.jpg"            
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
        </Flex>
        <Flex wrap="wrap" justifyContent="center" gap={1}>
          <DevCard
            onClick={() => handleCardClick("ubisoft")}
            name="Ubisoft"
            image="/assets/ubisoft.jpeg"            
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("sony")}
            name="Sony"
            image="/assets/sony.jpeg"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("valve")}
            name="Valve"
            image="/assets/valve.png"            
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

export default Developer;
