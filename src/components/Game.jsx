import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Game = (props) => {
  return (
    <Box ml={'4.5vw'} justifyContent={'center'}>
        <Flex justifyContent={'space-between'} maxW={'90vw'}>
            <h1>{props.name}</h1>
            <h1>{props.genre}</h1>
            <h1>{props.developer}</h1>
            <h1>{props.producer}</h1>
            <h1>{props.operating_system}</h1>
            <h1>{props.date}</h1>
        </Flex>
    </Box>
  )
}

export default Game