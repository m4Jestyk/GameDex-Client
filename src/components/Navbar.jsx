'use client'

import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Input,
  Container,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAdmin } from '../redux/slices/adminSlice';
import { useState } from 'react';
import axios from 'axios';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.admin.isAdmin);
  const adminText = isAdmin ? "Logged in" : "Logged out";

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = async() => {
    const res = await axios.post(`${import.meta.env.VITE_SERVER}/auth`, {
      userId: id,
      password: pw,
      envId: import.meta.env.VITE_ID,
      envPw: import.meta.env.VITE_PASSWORD,
    });

    const data = res.data;
    if(data === true) {
      dispatch(setAdmin(true));
    } else {
      console.log("Wrong credentials");
    }
  }

  const handleLogout = () => {
    dispatch(setAdmin(false));
    navigate("/");
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Container maxW="container.xl">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'} flexDir={{ base: 'column', md: 'row' }}>

            <Box onClick={() => navigate("/")} cursor={'pointer'} fontSize={{ base: 'lg', md: 'xl' }} mb={{ base: 4, md: 0 }}>
              GameDex
            </Box>

            <Flex alignItems={'center'} flexDir={{ base: 'column', md: 'row' }}>
              <Stack direction={'row'} spacing={7} alignItems={'center'}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>

                {/* Responsive Admin Menu */}
                <Menu>
                  <MenuButton as={Button} 
                    variant={'link'} 
                    width={{ base: 'full', md: 'auto' }} 
                    textAlign={{ base: 'center', md: 'left' }}
                  >
                    {isAdmin ? `` : `Enter`} Admin {isAdmin ? `Centre` : `Mode`}
                  </MenuButton>

                  <MenuList alignItems={'center'}>
                    <Center py={2}>
                      <p>{adminText}</p>
                    </Center>
                    <MenuDivider />
                    {isAdmin ? (
                      <Button onClick={() => navigate("/manager")} w="full" mb={2}>Control Panel</Button>
                    ) : (
                      <Container>
                        <Flex m={'5px'} onChange={(e) => setId(e.target.value)}>
                          <Input placeholder='Id' />
                        </Flex>
                        <Flex m={'5px'} onChange={(e) => setPw(e.target.value)}>
                          <Input placeholder='Password' type='password' />
                        </Flex>
                      </Container>
                    )}
                    {isAdmin ? (
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    ) : (
                      <MenuItem onClick={handleLogin}>Login</MenuItem>
                    )}
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>

          </Flex>
        </Container>
      </Box>
    </>
  );
}
