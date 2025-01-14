import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'

const Contato: React.FC = () => {
  return (
    <Box as="main" maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl" color="brand.800">
          Entre em Contato
        </Heading>
        <Text fontSize="xl" color="brand.600">
          Estamos aqui para ajudar. Preencha o formulário abaixo ou use nossas informações de contato direto.
        </Text>
        <Box as="form" width="100%">
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Nome</FormLabel>
              <Input type="text" placeholder="Seu nome completo" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>E-mail</FormLabel>
              <Input type="email" placeholder="seu@email.com" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Assunto</FormLabel>
              <Input type="text" placeholder="Assunto da mensagem" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mensagem</FormLabel>
              <Textarea placeholder="Sua mensagem aqui..." />
            </FormControl>
            <Button type="submit" colorScheme="brand" size="lg" width="100%">
              Enviar Mensagem
            </Button>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" size="lg" color="brand.700" mb={4}>
            Informações de Contato
          </Heading>
          <Text fontSize="lg" color="brand.600">
            Telefone: (11) 1234-5678<br />
            E-mail: contato@minimalestate.com<br />
            Endereço: Av. Paulista, 1000 - São Paulo, SP
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}

export default Contato

