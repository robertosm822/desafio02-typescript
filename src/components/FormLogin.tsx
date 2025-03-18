import { 
    Center,
    Input,
    Button
  } from '@chakra-ui/react'
  import { login } from '../services/login';
export const FormLogin = () =>{
    return (
        <div>
          <Input marginBottom={'15px'} variant='outline' placeholder="email" />
          <Input marginBottom={'15px'} variant='outline' placeholder="password" />
          <Center>
            <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              Button
            </Button>
          </Center>
        </div>
     
    )
}