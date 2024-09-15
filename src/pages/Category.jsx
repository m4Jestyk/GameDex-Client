import React from "react";
import CategoryCard from "../components/CategoryCard";
import { Flex } from "@chakra-ui/react";
import "../assets/assassin.jpg";

const Category = () => {
  return (
    <>
      <Flex mb={-50} wrap="wrap" justifyContent="center" gap={1}>
        <CategoryCard
          name="Franchise"
          image="/assets/franchise.webp"
          navigateTo="franchise"
          flex="1 1 calc(50% - 8px)"
        />
        <CategoryCard
          name="Developer"
          image="/assets/developers.jpg"
          navigateTo="developer"
          flex="1 1 calc(50% - 8px)"
        />
      </Flex>
      <Flex wrap="wrap" justifyContent="center" gap={1}>
        <CategoryCard
          name="Genre"
          image="/assets/genre.png"
          navigateTo="genre"
          flex="1 1 calc(50% - 8px)"
        />
        <CategoryCard
          name="Retro"
          image="/assets/retro.jpg"
          navigateTo="retro"
          flex="1 1 calc(50% - 8px)"
        />
      </Flex>
    </>
  );
};

export default Category;
