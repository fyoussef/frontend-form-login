import { 
    Avatar,
    Box,
    Button,
    Flex,
    Stack,
    Tab,
    TabList,
    Tabs,
    Text
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { BsFillFileBarGraphFill } from 'react-icons/bs'
import { FaHome, FaSignOutAlt, FaUser, FaWallet } from 'react-icons/fa'
import { MdIncompleteCircle } from 'react-icons/md'
import { TbArrowsDownUp } from 'react-icons/tb'
import { AiFillSetting } from 'react-icons/ai'

export default function Home() {
    return (
        <Flex 
            bg='gray.900'
            h='100vh'
            color='white'
        >

            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box 
                w={350}
                h='full'
                bg='blackAlpha.400'
            >
                <Flex
                    mt={24}
                    justify='center'
                    align='center'
                    flexDir='column'
                >
                    <Avatar 
                        size='2xl' 
                        src='https://bit.ly/sage-adebayo'
                    />
                    <Text 
                        mt='4'
                        fontWeight='bold'
                        fontSize={24}
                    >
                        FYoussef
                    </Text>
                    <Text
                        color='gray.600'
                    >
                        fyoussef@gmail.com
                    </Text>
                </Flex>

                <Flex
                    flexDir='column'
                    align='center'
                    mt='8'
                >
                    <Stack spacing='4'>
                        <Button 
                            leftIcon={<MdIncompleteCircle />} 
                            bg='transparent'
                            _hover={{
                                bg: 'blue.400'
                            }}
                        >
                            Dashboard
                        </Button>
                        <Button 
                            leftIcon={<BsFillFileBarGraphFill />} 
                            bg='transparent'
                            _hover={{
                                bg: 'blue.400'
                            }}
                        >
                            Investments
                        </Button>
                        <Button 
                            leftIcon={<TbArrowsDownUp />}
                            bg='transparent'
                            _hover={{
                                bg: 'blue.400'
                            }}
                        >
                            Transactions
                        </Button>
                        <Button 
                            leftIcon={<FaWallet />}
                            bg='transparent'
                            _hover={{
                                bg: 'blue.400'
                            }}
                        >
                            Wallet
                        </Button>
                        <Button 
                            leftIcon={<AiFillSetting />}
                            bg='transparent'
                            _hover={{
                                bg: 'blue.400'
                            }}
                        >
                            Settings
                        </Button>
                        <Button 
                            leftIcon={<FaSignOutAlt />}
                            bg='transparent'
                            _hover={{
                                bg: 'blue.400'
                            }}
                        >
                            Sign-out
                        </Button>
                    </Stack>
                </Flex>

            </Box>


        </Flex>
    )
}