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
            image="https://1000logos.net/wp-content/uploads/2019/06/electronic-arts.jpg"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("blizzard")}
            name="Blizzard"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Blizzard_Entertainment_Logo.svg/600px-Blizzard_Entertainment_Logo.svg.png"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("rockstar")}
            name="Rockstar"
            image="https://w0.peakpx.com/wallpaper/776/772/HD-wallpaper-rockstar-games-logo-rockstargames-rokcstar-games.jpg"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
        </Flex>
        <Flex wrap="wrap" justifyContent="center" gap={1}>
          <DevCard
            onClick={() => handleCardClick("ubisoft")}
            name="Ubisoft"
            image="data:image/jpeg;base64,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"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("sony")}
            name="Sony"
            image="https://pbs.twimg.com/media/FchgfNRX0AgVojU?format=jpg&name=4096x4096"
            navigateTo="result"
            flex="1 1 calc(50% - 8px)"
          />
          <DevCard
            onClick={() => handleCardClick("valve")}
            name="Valve"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LcvsNnIdTV4B_-CUZOCmiO6vk79edRIfSFit8mCBySRC4yLEWU5PCHa-zERz44sEyoE&usqp=CAU"
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
