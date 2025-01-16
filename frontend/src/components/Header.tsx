import { Box, Flex, HStack, IconButton, useDisclosure, Container, Button, Text, Stack } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { LoginButton } from './LoginButton'
import { UserProfile } from './UserProfile'

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box as="header" bg="white" boxShadow="sm" position="sticky" top="0" zIndex="sticky">
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            _hover={{ bg: 'gray.100' }}
          />

          <HStack spacing={8} alignItems="center">
            <Box>
              <Text
                as={RouterLink}
                to="/"
                fontSize="xl"
                fontWeight="bold"
                color="primary.500"
                _hover={{ color: 'primary.600' }}
              >
                MinimalEstate
              </Text>
            </Box>
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Button
                as={RouterLink}
                to="/"
                variant="ghost"
                size="sm"
                _hover={{ bg: 'primary.50', color: 'primary.500' }}
              >
                Início
              </Button>
              <Button
                as={RouterLink}
                to="/imoveis"
                variant="ghost"
                size="sm"
                _hover={{ bg: 'primary.50', color: 'primary.500' }}
              >
                Imóveis
              </Button>
              <Button
                as={RouterLink}
                to="/sobre"
                variant="ghost"
                size="sm"
                _hover={{ bg: 'primary.50', color: 'primary.500' }}
              >
                Sobre
              </Button>
              <Button
                as={RouterLink}
                to="/contato"
                variant="ghost"
                size="sm"
                _hover={{ bg: 'primary.50', color: 'primary.500' }}
              >
                Contato
              </Button>
            </HStack>
          </HStack>

          <Flex alignItems="center">
            <HStack spacing={4}>
              <LoginButton />
              <UserProfile />
            </HStack>
          </Flex>
        </Flex>

        {/* Mobile menu */}
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <Button
                as={RouterLink}
                to="/"
                variant="ghost"
                w="full"
                justifyContent="flex-start"
                onClick={onClose}
              >
                Início
              </Button>
              <Button
                as={RouterLink}
                to="/imoveis"
                variant="ghost"
                w="full"
                justifyContent="flex-start"
                onClick={onClose}
              >
                Imóveis
              </Button>
              <Button
                as={RouterLink}
                to="/sobre"
                variant="ghost"
                w="full"
                justifyContent="flex-start"
                onClick={onClose}
              >
                Sobre
              </Button>
              <Button
                as={RouterLink}
                to="/contato"
                variant="ghost"
                w="full"
                justifyContent="flex-start"
                onClick={onClose}
              >
                Contato
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  )
}
