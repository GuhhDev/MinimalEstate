import { Box, Heading, Text, SimpleGrid, Select } from '@chakra-ui/react'
import { PropertyCard } from '../components/PropertyCard'

const Imoveis: React.FC = () => {
  return (
    <Box as="main" maxWidth="1200px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" mb={4} color="brand.800">
        Nossos Imóveis
      </Heading>
      <Text fontSize="xl" mb={8} color="brand.600">
        Explore nossa coleção de propriedades minimalistas e encontre o lar perfeito para você.
      </Text>
      <Box mb={8}>
        <Select placeholder="Filtrar por tipo" mb={4}>
          <option value="casa">Casa</option>
          <option value="apartamento">Apartamento</option>
          <option value="studio">Studio</option>
        </Select>
      </Box>
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
        <PropertyCard
          imageUrl="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          imageAlt="Studio moderno"
          beds={1}
          baths={1}
          title="Studio moderno no coração da cidade"
          formattedPrice="R$ 450.000"
        />
        <PropertyCard
          imageUrl="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          imageAlt="Apartamento com terraço"
          beds={3}
          baths={2}
          title="Apartamento com terraço panorâmico"
          formattedPrice="R$ 950.000"
        />
        <PropertyCard
          imageUrl="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          imageAlt="Casa minimalista"
          beds={4}
          baths={3}
          title="Casa minimalista com design premiado"
          formattedPrice="R$ 1.800.000"
        />
      </SimpleGrid>
    </Box>
  )
}

export default Imoveis

