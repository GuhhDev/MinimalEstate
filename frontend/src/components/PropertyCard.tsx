import { Box, Image, Text, Stack, Button } from '@chakra-ui/react'

interface PropertyCardProps {
  imageUrl: string
  imageAlt: string
  beds: number
  baths: number
  title: string
  formattedPrice: string
}

export const PropertyCard: React.FC<PropertyCardProps> = (props) => {
  const { imageUrl, imageAlt, beds, baths, title, formattedPrice } = props

  return (
    <Box borderWidth="1px" borderColor="brand.200">
      <Image src={imageUrl} alt={imageAlt} w="100%" h="200px" objectFit="cover" />
      <Box p={4}>
        <Text fontSize="lg" fontWeight="semibold" mb={2} color="brand.800">
          {title}
        </Text>
        <Text color="brand.600" mb={2}>
          {beds} quartos • {baths} banheiros
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="brand.800" mb={4}>
          {formattedPrice}
        </Text>
        <Stack direction="row" spacing={2}>
          <Button variant="solid" size="sm">
            Ver detalhes
          </Button>
          <Button variant="outline" size="sm">
            Agendar visita
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}