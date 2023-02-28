import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChatProvider from './context/ChatProvider';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


	<ChakraProvider>
		<BrowserRouter>
			<ChatProvider>
				{/* needed for react-router-dom */}
				{/* <BrowserRouter>  */}
				<App />
				{/* </BrowserRouter> */}
			</ChatProvider>
		</BrowserRouter>
	</ChakraProvider>

);

