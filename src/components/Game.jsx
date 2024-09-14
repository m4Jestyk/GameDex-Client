import { Box, Flex, Text, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import '@fontsource/press-start-2p'; // Import the retro game font

const Game = (props) => {
  // Colors for light and dark modes
  const cardBg = useColorModeValue('linear-gradient(135deg, #2a2a72, #009ffd)', 'linear-gradient(135deg, #1f1c2c, #928dab)');
  const neonTextColor = useColorModeValue('#FF6EC7', '#0FF0FC');
  const subheadingColor = useColorModeValue('rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.8)');
  
  return (
    <Box 
      bg={cardBg} 
      p={8} 
      borderRadius="lg" 
      boxShadow="0 0 20px rgba(0, 255, 255, 0.7)"  // Neon glow effect
      maxW="80vw" 
      mx="auto" 
      mb={8} 
      fontFamily="'Press Start 2P', sans-serif" 
      color={neonTextColor}
      _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
      transition="0.3s"
    >
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        justifyContent="space-between" 
        alignItems={{ base: 'flex-start', md: 'center' }}
      >
        <Stack spacing={3} textAlign={{ base: 'left', md: 'center' }} flex="1">
          <Text 
            as="h1" 
            fontSize="2xl"  // Larger font size
            fontWeight="extrabold"  // Bolder weight
            textDecoration="underline"  // Underline the text
            textShadow="0px 0px 8px #FF6EC7"  // Neon shadow effect
          >
            {props.name}
          </Text>
          <Text fontSize="md" color={subheadingColor} fontWeight="medium">
            Genre: <Text as="span" color={neonTextColor}>{props.genre}</Text>
          </Text>
          <Text fontSize="md" color={subheadingColor} fontWeight="medium">
            Developer: <Text as="span" color={neonTextColor}>{props.developer}</Text>
          </Text>
          <Text fontSize="md" color={subheadingColor} fontWeight="medium">
            Producer: <Text as="span" color={neonTextColor}>{props.producer}</Text>
          </Text>
          <Text fontSize="md" color={subheadingColor} fontWeight="medium">
            Platform: <Text as="span" color={neonTextColor}>{props.operating_system}</Text>
          </Text>
          <Text fontSize="md" color={subheadingColor} fontWeight="medium">
            Release Date: <Text as="span" color={neonTextColor}>{props.date}</Text>
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Game;
