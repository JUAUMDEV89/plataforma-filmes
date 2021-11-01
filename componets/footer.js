import { Flex, Text } from '@chakra-ui/react';

export function Footer(){
    return <Flex
      justifyContent="center"
      alignItems="center"
      h="2rem"
      backgroundColor="blue.800"
      w="100%"
      mt="25px"
    >
        <Text
          color="white"
        >Dados pegos da API: https://developers.themoviedb.org/3</Text>
    </Flex>
}