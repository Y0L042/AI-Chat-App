import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { React, useState} from 'react'

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [show, setShow] = useState(false)
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [picture, setPicture] = useState();

  const handleClick = () => setShow(!show);
  const postDetails = (pictures) => {};
  
  const submitHandler = () => {};

  return (
    <VStack spacing={'5px'}>
      
      {/* Name */}
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input 
          placeholder='Enter your name'
          onChange={(event) => setName(event.target.value)}
        />
      </FormControl>

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

      {/* Confirm Password */}
      <FormControl id='password' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'} 
            placeholder='Enter your password'
            onChange={(event) => setConfirmpassword(event.target.value)}
          />
          <InputRightElement width={'4.5rem'}>
            <Button h='1.75rem' size='sm'  onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      {/* Picture */}
      <FormControl id='picture' isRequired>
        <FormLabel>Upload your profile picture</FormLabel>
        <Input 
          type='file'
          p={1.5}
          accept='image/*'
          onChange={(event) => postDetails(event.target.files[0])}
        />
      </FormControl>

      {/* Sign Up Button */}
      <Button
        colorScheme={"blue"}
        width='100%'
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>

    </VStack>
  )
}

export default Signup