import { Box, Container, Stack, SimpleGrid, Text, Link, Icon, Input, Button, VStack, useColorModeValue } from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

export const Footer = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bg} borderTop="1px" borderColor={borderColor}>
      <Container maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          {/* Sobre */}
          <VStack align="flex-start" spacing={3}>
            <Text fontSize="lg" fontWeight="bold" color="primary.500">
              MinimalEstate
            </Text>
            <Text color="gray.600" fontSize="sm">
              Encontre o imóvel dos seus sonhos de forma simples e rápida. Somos especialistas em proporcionar a melhor experiência na busca pelo seu novo lar.
            </Text>
          </VStack>

          {/* Links Rápidos */}
          <VStack align="flex-start" spacing={3}>
            <Text fontWeight="bold" mb={2}>Links Rápidos</Text>
            <Link as={RouterLink} to="/" color="gray.600" _hover={{ color: 'primary.500' }}>
              Home
            </Link>
            <Link as={RouterLink} to="/imoveis" color="gray.600" _hover={{ color: 'primary.500' }}>
              Imóveis
            </Link>
            <Link as={RouterLink} to="/sobre" color="gray.600" _hover={{ color: 'primary.500' }}>
              Sobre Nós
            </Link>
            <Link as={RouterLink} to="/contato" color="gray.600" _hover={{ color: 'primary.500' }}>
              Contato
            </Link>
          </VStack>

          {/* Newsletter */}
          <VStack align="flex-start" spacing={3}>
            <Text fontWeight="bold" mb={2}>Newsletter</Text>
            <Text color="gray.600" fontSize="sm">
              Receba as últimas novidades e ofertas exclusivas.
            </Text>
            <Stack direction="row" w="full">
              <Input
                placeholder="Seu e-mail"
                bg={useColorModeValue('gray.100', 'gray.700')}
                border={0}
                _focus={{
                  bg: 'gray.200',
                  outline: 'none',
                }}
              />
              <Button
                bg="primary.500"
                color="white"
                _hover={{
                  bg: 'primary.600',
                }}
              >
                Assinar
              </Button>
            </Stack>
          </VStack>

          {/* Redes Sociais */}
          <VStack align="flex-start" spacing={3}>
            <Text fontWeight="bold" mb={2}>Redes Sociais</Text>
            <Stack direction="row" spacing={4}>
              <Link href="#" isExternal>
                <Icon
                  as={FaFacebook}
                  w={6}
                  h={6}
                  color="gray.600"
                  _hover={{ color: 'primary.500' }}
                  transition="color 0.2s"
                />
              </Link>
              <Link href="#" isExternal>
                <Icon
                  as={FaTwitter}
                  w={6}
                  h={6}
                  color="gray.600"
                  _hover={{ color: 'primary.500' }}
                  transition="color 0.2s"
                />
              </Link>
              <Link href="#" isExternal>
                <Icon
                  as={FaInstagram}
                  w={6}
                  h={6}
                  color="gray.600"
                  _hover={{ color: 'primary.500' }}
                  transition="color 0.2s"
                />
              </Link>
              <Link href="#" isExternal>
                <Icon
                  as={FaLinkedin}
                  w={6}
                  h={6}
                  color="gray.600"
                  _hover={{ color: 'primary.500' }}
                  transition="color 0.2s"
                />
              </Link>
            </Stack>
          </VStack>
        </SimpleGrid>

        {/* Copyright */}
        <Box borderTopWidth={1} borderColor={borderColor} pt={8} mt={8}>
          <Text textAlign="center" color="gray.600" fontSize="sm">
            {new Date().getFullYear()} MinimalEstate. Todos os direitos reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
