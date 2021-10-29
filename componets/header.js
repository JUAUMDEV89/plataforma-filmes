import { Flex, Text, Avatar } from '@chakra-ui/react';

export function Header(){
  return <Flex
           as="header"
           justifyContent="space-between"
           padding="8"
           alignItems="center"
 >
   <Text
     color="white"
     fontSize="6xl"
     fontWeight="bold"
   >Movies</Text>

   <Avatar src="https://bit.ly/sage-adebayo" />
 </Flex>
}