import { Box, Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Login from '../components/authentication/Login'
import Signup from '../components/authentication/Signup'
import React, { useEffect } from 'react'
import { Route, useNavigate } from 'react-router-dom';

export const HomePage = () => {
	// if user is logged in, move them to chats page
	const navigate = useNavigate();
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("userInfo"));
		if (user) navigate("/chats");
	}, [navigate]);

  return (
    <Container
      maxW='xl'
      centerContent
    >
      {/* Title */}
      <Box
        d='flex'
        justifyContent="center"
        p={3}
        bg='white'
        w='100%'
        m='40px 0 15px 0'
        borderRadius='lg'
        borderWidth='1px'
      >
        <Text fontSize='4xl' fontFamily='Work Sans' color='black' >
          AI Chat App
        </Text>
      </Box>

      {/* Login Box */}
      <Box
        bg='white'
        w='100%'
        p={4}
        borderRadius='lg'
        borderWidth='1px'
      >
        <Tabs variant='soft-rounded'>
          <TabList mb='1em'>
            <Tab width='50%'>Login</Tab>
            <Tab width='50%'>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </Container>
  )
}

export default HomePage;