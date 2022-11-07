import { 
  Flex,
  Text
} from '@chakra-ui/react'
import Head from 'next/head'
export default function Cadastro() {
    return (
        <Flex 
            bg='gray.900'
            h='100vh'
            color='white'
            align='center'
            justify='center'
        >    

        <Head>
            <title>Cadastro</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

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
