'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'



export default function DevCard(props) {

  const navigate = useNavigate();
  const developer = useSelector(state => state.game.developer);

  return (
    <Center py={12}>
      <Box
      onClick={() => {
        props.onClick();
        navigate(`${props.navigateTo}`);
      }}
        cursor={'pointer'}
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `{props.image}`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={props.image}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {props.name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}
