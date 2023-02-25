import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { React, useState } from 'react'

const Login = () => {
	const [email, setEmail] = useState();
	const [show, setShow] = useState(false)
	const [password, setPassword] = useState();

	const handleClick = () => setShow(!show);
	const postDetails = (pictures) => {};

	const submitHandler = () => {};

  return (
    <VStack spacing={'5px'}>

      {/* Email */}
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input 
          placeholder='Enter your email'
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormControl>

      {/* Password */}
      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'} 
            placeholder='Enter your password'
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputRightElement width={'4.5rem'}>
            <Button h='1.75rem' size='sm'  onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>


      {/* Login Button */}
      <Button
        colorScheme={"blue"}
        width='100%'
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>


      {/* Test Guest User Button */}
      <Button
	  	variant={'solid'}
        colorScheme={"red"}
        width='100%'
        style={{ marginTop: 15 }}
        onClick={() => {
			setEmail("guest@example.com");
			setPassword("123456");
		}}
      >
        Guest User
      </Button>

    </VStack>
  )
}

export default Login