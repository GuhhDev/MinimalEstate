import { Box, Flex, Text, Button, Stack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { UserProfile } from './UserProfile'

const Header: React.FC = () => {
  const { isAuthenticated, username } = useAuth();

  return (
    <Box as="header" bg="white" borderBottom="1px" borderColor="brand.200" py={4}>
      <Flex maxW="1200px" mx="auto" px={4} alignItems="center" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold" color="brand.800">
          MinimalEstate
        </Text>
        <Stack direction="row" spacing={4} alignItems="center">
          <Button as={Link} to="/" variant="ghost" color="brand.600">Início</Button>
          <Button as={Link} to="/imoveis" variant="ghost" color="brand.600">Imóveis</Button>
          <Button as={Link} to="/sobre" variant="ghost" color="brand.600">Sobre</Button>
          <Button as={Link} to="/contato" variant="ghost" color="brand.600">Contato</Button>
          {isAuthenticated && (
            <Button as={Link} to="/cadastro-imovel" variant="solid" colorScheme="brand">
              Cadastrar Imóvel
            </Button>
          )}
          {isAuthenticated ? (
            <HStack spacing={2}>
              <Text color="brand.600" fontWeight="medium">
                Bem-vindo, {username}
              </Text>
              <UserProfile />
            </HStack>
          ) : (
            <UserProfile />
          )}
        </Stack>
      </Flex>
    </Box>
  )
}

export default Header
