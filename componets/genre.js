import { Flex, Text } from '@chakra-ui/react';

export function Genre({ active, title }){

    return <Flex
     backgroundColor={active ? 'orange.400' : "blue.700"}
     w="150px"
     h="40px"
     justifyContent="center"
     alignItems="center"
     borderRadius="18px"
     cursor="pointer"
    >
       <Text
        color="white"
        fontSize="0.6rem"
       >{ title }</Text>
    </Flex>
}