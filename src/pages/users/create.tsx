import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

export default function CreatedUser() {
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <SideBar />

        <Box flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}>
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

          <Divider borderColor='gray.700' mb='8' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='nome' label='Nome completo' />
              <Input name='email' label='E-mail' type='email' />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='password' label='Senha' type='password' />
              <Input name='password_confirmation' label='Confirmação da senha' type='password' />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack>
              <Link href="/users" passHref>
                <Button as='a' colorScheme='whiteAlpha' >Cacelar</Button>
              </Link>
              <Link href="/users" passHref>
                <Button colorScheme='green' >Salvar</Button>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>

  )
}