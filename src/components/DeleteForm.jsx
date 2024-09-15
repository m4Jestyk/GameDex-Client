import { Box, FormControl, FormLabel, Input, Button, Heading } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

const DeleteForm = ({ gameId, setGameId, deleteAction, loading }) => {
  const cardBg = useColorModeValue('gray.100', 'gray.700'); // Background color based on theme

  return (
    <Box p={4} bg={cardBg} borderRadius="lg" boxShadow="lg" mt={4}>
      <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={4}>
        Delete Game
      </Heading>
      <FormControl mb={4}>
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Game ID</FormLabel>
        <Input value={gameId} onChange={(e) => setGameId(e.target.value)} />
      </FormControl>
      <Button colorScheme="red" onClick={deleteAction} isLoading={loading}>
        Delete Game
      </Button>
    </Box>
  );
};

export default DeleteForm;
