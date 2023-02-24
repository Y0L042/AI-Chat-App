import React, { useEffect } from 'react'
import axios from 'axios'

export const ChatPage = () => {
	const fetchChats = async() => {
		const data = await axios.get('api/chat');
	};

	useEffect(() => {
		fetchChats();
	}, []);

  return (
	<div>ChatPage</div>
  )
}

export default ChatPage;