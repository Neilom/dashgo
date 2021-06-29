import { Flex, Button, Stack, } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from "react-hook-form"

type SingInFormData = {
  email: string;
  password: string;
}

export default function Home() {

  const { register, handleSubmit, formState } = useForm()

  console.log(formState.errors)

  const handleSignIn: SubmitHandler<SingInFormData> = async (values) => {

    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as='form'
        w='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input
            name='email'
            label='E-mail'
            type='email'
            error={formState.errors}
            {...register("email", {required: 'E-mail obrigatório'})}
          />
          <Input
            name='password'
            label='Senha'
            type='password'
            error={formState.errors}
            {...register("password", {required: 'Senha obrigatório'})}
          />
        </Stack>
        <Button
          type="submit"
          mt='6'
          colorScheme="pink"
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
