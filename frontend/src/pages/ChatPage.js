import { Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ChatState } from '../context/ChatProvider'

import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/MyChats';
import ChatBox from '../components/ChatBox';

export const ChatPage = () => {
	const {user} = ChatState();

  return (
	<div style={{width:"100%"}}>
		{user && <SideDrawer/>}
		<Box
			d="flex"
			justifyContent={'space-between'}
			w='100%'
			h='91.5vh'
			p={'10px'}
		>
			{user && <MyChats/>}
			{user && <ChatBox/>}
		</Box>
	</div>
  )
}

export default ChatPage;