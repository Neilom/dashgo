import { Stack, Button, Box } from "@chakra-ui/react";

export default function () {
  return (
    <Stack
      direction='row'
      spacing='6'
      mt='8'
      justify='space-between'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row'>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          colorScheme='green'
          disabled
          _disabled={{
            bg: 'green.500',
            cursor: 'default',
          }}
        >
          1
      </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='gray.700'
          _hover={{
            bg: 'green.500'
          }}
        >
          2
      </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='gray.700'
          _hover={{
            bg: 'green.500'
          }}
        >
          3
      </Button>
      </Stack>
    </Stack>
  )
}