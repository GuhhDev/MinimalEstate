import { Box, Heading, SimpleGrid, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PropertyCard } from '../components/PropertyCard'

const Home: React.FC = () => {
  return (
    <Box as="main" maxWidth="1200px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" mb={4} color="brand.800">
        Bem-vindo à MinimalEstate
      </Heading>
      <Text fontSize="xl" mb={8} color="brand.600">
        Descubra propriedades minimalistas que combinam estilo e funcionalidade.
      </Text>
      <Heading as="h2" size="xl" mb={6} color="brand.700">
        Imóveis em Destaque
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        <PropertyCard
          imageUrl="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          imageAlt="Casa moderna"
          beds={3}
          baths={2}
          title="Casa moderna com vista para o mar"
          formattedPrice="R$ 1.200.000"
        />
        <PropertyCard
          imageUrl="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          imageAlt="Apartamento luxuoso"
          beds={2}
          baths={2}
          title="Apartamento luxuoso no centro"
          formattedPrice="R$ 800.000"
        />
        <PropertyCard
          imageUrl="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
          imageAlt="Casa de campo"
          beds={4}
          baths={3}
          title="Casa de campo com piscina"
          formattedPrice="R$ 1.500.000"
        />
      </SimpleGrid>
      <Button as={Link} to="/imoveis" size="lg" mt={10} colorScheme="brand">
        Ver todos os imóveis
      </Button>
    </Box>
  )
}

export default Home

