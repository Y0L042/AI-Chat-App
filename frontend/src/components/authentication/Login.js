import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast, VStack } from '@chakra-ui/react'
import { React, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState();
	const [show, setShow] = useState(false);
	const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

	const handleClick = () => setShow(!show);
	const postDetails = (pictures) => {};

	const submitHandler = async() => {
    setLoading(true);
    if (!email || !password){
      toast({
        title: 'Please fill in all fields',
        status: 'warning',
        duration: 3500,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type":"application/json",
        },
      };
      // making the login request
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      toast({
        title: 'Login successful',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate.push("/chats");
    } catch (error) {
      toast({
        title: 'Error occured',
        description: error.response.data.message,
        status: 'error',
        duration: 3500,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
	};

  return (
    <VStack spacing={'5px'}>

      {/* Email */}
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input 
          placeholder='Enter your email'
          value={email} // -DEV_RMV
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
            value={password} // -DEV_RMV
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
        isLoading={loading}
      >
        Login
      </Button>


      {/* Test Guest User Button -DEV_RMV */}
      <Button
	  	  variant={'solid'}
        colorScheme={"red"}
        width='100%'
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail("jdoe@email.com");
          setPassword("123");
        }}
      >
        Guest User
      </Button>

    </VStack>
  )
}

export default Login