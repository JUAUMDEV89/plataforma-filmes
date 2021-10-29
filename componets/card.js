import { Flex, Text, Image } from '@chakra-ui/react';

export function Card({ name, description, url_image }){

    return <Flex
      w="170px"
      h="260px"
      direction="column"
      borderRadius="10px"
      backgroundColor="red"
      cursor="pointer"
      position="relative"
    >
      <Image 
       src={ url_image }
       alt={name}
       w="100"
       h="100%"
       borderRadius="10px"
       position="absolute"
      />

      <Flex
       direction="column"

       filter="blur"
       width="100%"
       height="80px"
       zIndex="3"
       marginTop="200"
       borderBottomRadius="10px"
       paddingLeft="10px"
       background="black"
      >
      <Text
        color="white"
        fontWeight="bold"
        fontSize="0.8rem"
      >{ name }</Text>

      <Text
        color="gray.800"
      >{ description }</Text>
      </Flex>
    </Flex>
}