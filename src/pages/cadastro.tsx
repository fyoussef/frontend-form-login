import { 
  Flex,
  Text
} from '@chakra-ui/react'
export default function Cadastro() {
    return (
        <Flex 
            bg='gray.900'
            h='100vh'
            color='white'
            align='center'
            justify='center'
        >    

        <Flex
            justify='center'
            flexDir='column'
            px={4}
        >
            <Text 
                fontWeight='bold'
                fontSize='3xl'
            >
                Cadastre-se
            </Text>
        </Flex>


        </Flex>
    )
}
