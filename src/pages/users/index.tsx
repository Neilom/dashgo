import { Text, Checkbox, Tbody, Td, Tr } from "@chakra-ui/react";
import { Box, Button, Icon, Flex, Heading, Table, Thead, Th } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <SideBar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>
            <Button as='a' size='sm' fontSize='sm' colorScheme='green' leftIcon={<Icon as={RiAddLine} fontSize='16' />}>
              Criar novo
              </Button>
          </Flex>


          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                  <Checkbox colorScheme="green" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td p='6'>
                  <Checkbox colorScheme="green" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Leonardo Schmitt</Text>
                    <Text fontSize='sm' color='gray.300'>leonardox.schmitt@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  04 de Abril, 2021
                </Td>
                <Td >
                  <Button as='a' size='sm' fontSize='sm' colorScheme='green' leftIcon={<Icon as={RiPencilLine} fontSize='16' />} >
                    Editar
                  </Button>
                </Td>

              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>

  )
}