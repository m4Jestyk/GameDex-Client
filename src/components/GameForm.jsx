import { Box, FormControl, FormLabel, Input, Button, Heading } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

const GameForm = ({ game, handleInputChange, submitAction, loading, formTitle }) => {
  const cardBg = useColorModeValue('gray.100', 'gray.700'); 

  return (
    <Box p={4} bg={cardBg} borderRadius="lg" boxShadow="lg" mt={4}>
      <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={4}>
        {formTitle}
      </Heading>
      <FormControl mb={4}>
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Name</FormLabel>
        <Input name="name" value={game.name} onChange={handleInputChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Producer</FormLabel>
        <Input name="producer" value={game.producer} onChange={handleInputChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Developer</FormLabel>
        <Input name="developer" value={game.developer} onChange={handleInputChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Release Date</FormLabel>
        <Input name="date" value={game.date} onChange={handleInputChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Operating System</FormLabel>
        <Input name="operating_system" value={game.operating_system} onChange={handleInputChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Genre</FormLabel>
        <Input name="genre" value={game.genre} onChange={handleInputChange} />
      </FormControl>
      <Button colorScheme="green" onClick={submitAction} isLoading={loading}>
        {formTitle}
      </Button>
    </Box>
  );
};

export default GameForm;
