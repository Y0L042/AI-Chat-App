import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { React, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [show, setShow] = useState(false)
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [picture, setPicture] = useState();
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);

  const postDetails = (pictures) => {
    setLoading(true);
    if (pictures === undefined){
        toast({
          title: 'Please select an image',
          status: 'warning',
          duration: 3500,
          isClosable: true,
          position: "bottom",
        });
        return;
    }
    
    if (pictures.type === "image/jpeg" || pictures.type === "image/png"){
      const data = new FormData();
      data.append("file", pictures);
      data.append("upload_preset", "AI Chat App");
      data.append("cloud_name", "dxe7ioeo4");
      fetch("https://api.cloudinary.com/v1_1/dxe7ioeo4/image/upload", {
        method: 'post',
        body: data,
      }).then((res) => res.json())
      .then(data => {
        setPicture(data.url.toString());
        console.log(data.url.toString());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
    } else {
        toast({
          title: 'Please select an image',
          status: 'warning',
          duration: 3500,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        return;
    }
  };
  
  const submitHandler = async() => {
    setLoading(true);
    if (!name || !email || !password ||!confirmpassword){
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

    if (password !== confirmpassword){
      toast({
        title: 'Passwords do not match',
        status: 'warning',
        duration: 3500,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type":"application/json",
        },
      };
      const { data } = await axios.post("/api/user", {name, email, password, picture}, config);
      toast({
        title: 'Registration successful',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      navigate.push('/chats');
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
        isLoading={loading}
      >
        Sign Up
      </Button>

    </VStack>
  )
}

export default Signup