import { Flex, Text } from '@chakra-ui/react';

export function Footer(){
    return <Flex
      justifyContent="center"
      alignItems="center"
      h="2rem"
      backgroundColor="blue.700"
      w="100%"
    >
        <Text>Dados pegos da api https://developers.themoviedb.org/3</Text>
    </Flex>
}