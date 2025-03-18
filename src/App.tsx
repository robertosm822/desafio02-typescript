import { 
  Center,
  ChakraProvider,
  Box,
} from '@chakra-ui/react'
import { CardLogin } from './components/CardLogin';
import { FormLogin } from './components/FormLogin';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ChakraProvider>
      <Header title="DIO Bank" />
      <Box minHeight='100vh' backgroundColor='#00BFFF' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <CardLogin />
          </Center>
          
          <FormLogin />

        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
