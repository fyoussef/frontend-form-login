import { Button } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

interface GoogleButtonProps {
    buttonText: string
}

export function GoogleButton({ buttonText }: GoogleButtonProps) {
    return (
        <Button 
            colorScheme='red'
            leftIcon={<FaGoogle />}
            mt='4'
        >
            { buttonText }
        </Button>
    )
}