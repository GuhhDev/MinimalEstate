import { Box, Flex, Text, Button, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <Box as="header" bg="white" borderBottom="1px" borderColor="brand.200" py={4}>
      <Flex maxW="1200px" mx="auto" px={4} alignItems="center" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold" color="brand.800">
          MinimalEstate
        </Text>
        <Stack direction="row" spacing={4}>
          <Button as={Link} to="/" variant="ghost" color="brand.600">Início</Button>
          <Button as={Link} to="/imoveis" variant="ghost" color="brand.600">Imóveis</Button>
          <Button as={Link} to="/sobre" variant="ghost" color="brand.600">Sobre</Button>
          <Button as={Link} to="/contato" variant="ghost" color="brand.600">Contato</Button>
          <Button as={Link} to="/cadastro-imovel" variant="solid" colorScheme="brand">Cadastrar Imóvel</Button>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Header

