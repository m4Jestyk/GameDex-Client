import { Button, Flex } from '@chakra-ui/react';

const ActionButtons = ({ setActiveForm }) => {
  return (
    <Flex justify="center" mb={8} flexWrap="wrap" gap={4}>
      <Button
        colorScheme="green"
        onClick={() => setActiveForm('add')}
        fontSize={{ base: 'sm', md: 'md' }}
        px={{ base: 4, md: 6 }}
        py={{ base: 2, md: 3 }}
        width={{ base: '100%', sm: 'auto' }}
      >
        Add Game
      </Button>

      <Button
        colorScheme="blue"
        onClick={() => setActiveForm('update')}
        fontSize={{ base: 'sm', md: 'md' }}
        px={{ base: 4, md: 6 }}
        py={{ base: 2, md: 3 }}
        width={{ base: '100%', sm: 'auto' }}
      >
        Update Game
      </Button>

      <Button
        colorScheme="red"
        onClick={() => setActiveForm('delete')}
        fontSize={{ base: 'sm', md: 'md' }}
        px={{ base: 4, md: 6 }}
        py={{ base: 2, md: 3 }}
        width={{ base: '100%', sm: 'auto' }}
      >
        Delete Game
      </Button>
    </Flex>
  );
};

export default ActionButtons;
