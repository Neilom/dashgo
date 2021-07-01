import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query"
import { api } from "../../services/api";
import { queryCliente } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória").min(6, 'Senha precisa de 6 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'senha diferente')
})

export default function CreatedUser() {

  const router = useRouter()

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        created_at: new Date()
      }
    })
    return response.data.user
  }, {
    onSuccess: () => {
      queryCliente.invalidateQueries('users')
    }
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values)
    router.push('/users')
  }

  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <SideBar />

        <Box as='form' onSubmit={handleSubmit(handleCreateUser)} flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}>
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

          <Divider borderColor='gray.700' mb='8' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='nome' label='Nome completo'{...register('name')} error={formState.errors.name} />
              <Input name='email' label='E-mail' type='email' {...register('email')} error={formState.errors.email} />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='password' label='Senha' type='password' {...register('password')} error={formState.errors.password} />
              <Input name='password_confirmation' label='Confirmação da senha' type='password' {...register('password_confirmation')} error={formState.errors.password_confirmation} />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack>
              <Link href="/users" passHref>
                <Button as='a' colorScheme='whiteAlpha' >Cacelar</Button>
              </Link>
              <Button type="submit" colorScheme='green' isLoading={formState.isSubmitting}>Salvar</Button>

            </HStack>

          </Flex>

        </Box>

      </Flex>

    </Box>

  )

}