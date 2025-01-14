import { Box, Heading, Text, VStack, Image } from '@chakra-ui/react'

const Sobre: React.FC = () => {
  return (
    <Box as="main" maxWidth="1200px" margin="auto" padding={8}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl" color="brand.800">
          Sobre a MinimalEstate
        </Heading>
        <Text fontSize="xl" color="brand.600">
          Somos uma imobiliária especializada em propriedades minimalistas e modernas, 
          focada em oferecer espaços que combinam estética e funcionalidade.
        </Text>
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
          alt="Equipe MinimalEstate"
          borderRadius="md"
        />
        <Heading as="h2" size="xl" color="brand.700">
          Nossa Missão
        </Heading>
        <Text fontSize="lg" color="brand.600">
          Conectar pessoas a espaços que inspiram, simplificam e melhoram suas vidas. 
          Acreditamos que um ambiente bem projetado pode transformar o cotidiano e elevar a qualidade de vida.
        </Text>
        <Heading as="h2" size="xl" color="brand.700">
          Por que escolher a MinimalEstate?
        </Heading>
        <Text fontSize="lg" color="brand.600">
          1. Expertise em design minimalista<br />
          2. Curadoria cuidadosa de propriedades<br />
          3. Atendimento personalizado<br />
          4. Compromisso com a sustentabilidade<br />
          5. Parceria com arquitetos e designers renomados
        </Text>
      </VStack>
    </Box>
  )
}

export default Sobre

