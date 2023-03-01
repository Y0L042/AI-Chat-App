import { Box, Button, Menu, MenuButton, MenuList, Text, Tooltip } from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'

const SideDrawer = () => {
	const [search, setSearch] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingChat, setLoadingChat] = useState();



	return <>
		<Box
			d="flex"
			justifyContent={"space-between"}
			alignItems="center"
			bg="white"
			w="100%"
			p="5px 10px 5px 10px"
			borderWidth={"5px"}
		>
			<Tooltip 
				label='Search users to chat with' 
				hasArrow 
				placement='bottom-end'
			>
				<Button variant='ghost'>
					<i class="fa fa-search" aria-hidden="true"></i>
					<Text
						d={{base:"none", md: 'flex'}} px='4'
					>
						Search User
					</Text>
				</Button>
			</Tooltip>

			<Text fontSize={"2xl"} fontFamily="Work sans">
				AI Chat App
			</Text>

			<div>
				<Menu>
					<MenuButton p={1}>
						<BellIcon fontsize="2xl" m={1} />
					</MenuButton>
					{/* <MenuList></MenuList> */}
				</Menu>

				{/* Profile Menu */}
				<Menu>
					<MenuButton 
						as={Button}
						rightIcon={<ChevronDownIcon/>} 
					>
						<BellIcon fontsize="2xl" m={1} />
					</MenuButton>
				</Menu>
			</div>
		</Box>
	</>
};

export default SideDrawer