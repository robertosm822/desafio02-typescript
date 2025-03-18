import { 
    Center,
    Input,
    Button
} from '@chakra-ui/react'
import { welcomeMessage } from '../services/welcome';
export const FormLogin = () =>{
    return (
        <div>
          <Input marginBottom={'15px'} variant='outline' placeholder="email" />
          <Input marginBottom={'15px'} variant='outline' placeholder="password" />
          <Center>
            <Button onClick={welcomeMessage} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              ENTRAR
            </Button>
          </Center>
        </div>
     
    )
}