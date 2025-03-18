
import { 
    Heading, 
    Stack, 
    Box, 
    StackDivider 
} from '@chakra-ui/react'
import { 
  Card, 
  CardHeader, 
  CardBody, 
 } from '@chakra-ui/card'

export const CardLogin = () => {
  return(
<Card>
  <CardHeader textAlign={'center'} padding={'10px'}>
    <Heading size='md'>Seja bem vindo!</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box textAlign={'center'} padding={'10px'}>
        <Heading size='xs' textTransform='uppercase'>
          Faça o Login
        </Heading>
        
      </Box>
     
    </Stack>
  </CardBody>
</Card>
  )
}