import logo from './logo.svg';
import './App.css';
import { Button } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      {/* Home Page */}
      <Route path='/' component={Homepage} />
      {/* Chats Page */}
      <Route path='/chats' />



      <Button colorScheme='blue'>Button</Button>



    </div>
  );
}

export default App;
