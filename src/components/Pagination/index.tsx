import { Stack, Button, Box } from "@chakra-ui/react";
import { PaginationItens } from "./PaginationItem";

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

        <PaginationItens number={1} isCurrent />
        <PaginationItens number={2} />
        <PaginationItens number={3} />



      </Stack>
    </Stack>
  )
}