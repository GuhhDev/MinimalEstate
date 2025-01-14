import { Box, Flex, Text, Stack, Link } from '@chakra-ui/react'

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="brand.50" borderTop="1px" borderColor="brand.200" py={8}>
      <Flex maxW="1200px" mx="auto" px={4} flexDirection={['column', 'row']} justifyContent="space-between">
        <Box mb={[4, 0]}>
          <Text fontSize="lg" fontWeight="bold" color="brand.800" mb={2}>
            MinimalEstate
          </Text>
          <Text color="brand.600" fontSize="sm">
            Encontre o imóvel dos seus sonhos
          </Text>
        </Box>
        <Stack direction={['column', 'row']} spacing={8}>
          <Stack>
            <Text fontWeight="bold" color="brand.800" mb={2}>Navegação</Text>
            <Link href="#" color="brand.600">Início</Link>
            <Link href="#" color="brand.600">Imóveis</Link>
            <Link href="#" color="brand.600">Sobre</Link>
            <Link href="#" color="brand.600">Contato</Link>
          </Stack>
          <Stack>
            <Text fontWeight="bold" color="brand.800" mb={2}>Legal</Text>
            <Link href="#" color="brand.600">Termos de Uso</Link>
            <Link href="#" color="brand.600">Política de Privacidade</Link>
          </Stack>
        </Stack>
      </Flex>
      <Text textAlign="center" fontSize="sm" color="brand.500" mt={8}>
        © 2023 MinimalEstate. Todos os direitos reservados.
      </Text>
    </Box>
  )
}

export default Footer

