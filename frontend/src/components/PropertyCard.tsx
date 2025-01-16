import { Box, Image, Text, Badge, Flex, Icon, VStack, HStack, useColorModeValue } from '@chakra-ui/react'
import { FaBed, FaBath, FaRuler } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface PropertyCardProps {
  id: string
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  imageUrl: string
  type: string
}

export const PropertyCard = ({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  imageUrl,
  type
}: PropertyCardProps) => {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      as={Link}
      to={`/imoveis/${id}`}
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      bg={bg}
      borderColor={borderColor}
      transition="all 0.2s"
      _hover={{
        transform: 'translateY(-4px)',
        shadow: 'lg',
        borderColor: 'primary.500',
      }}
    >
      <Box position="relative">
        <Image
          src={imageUrl || 'https://via.placeholder.com/400x300'}
          alt={title}
          height="250px"
          width="100%"
          objectFit="cover"
        />
        <Badge
          position="absolute"
          top="4"
          right="4"
          px="2"
          py="1"
          colorScheme="primary"
          borderRadius="md"
          textTransform="capitalize"
        >
          {type}
        </Badge>
      </Box>

      <VStack p="6" spacing="3" align="stretch">
        <Text fontSize="xl" fontWeight="semibold" noOfLines={1}>
          {title}
        </Text>
        
        <Text color="primary.500" fontSize="2xl" fontWeight="bold">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(price)}
        </Text>

        <Text color="gray.600" fontSize="sm" noOfLines={1}>
          {location}
        </Text>

        <HStack spacing="8" pt="2">
          <Flex align="center">
            <Icon as={FaBed} color="gray.500" mr="2" />
            <Text fontSize="sm" color="gray.600">
              {bedrooms} {bedrooms === 1 ? 'Quarto' : 'Quartos'}
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaBath} color="gray.500" mr="2" />
            <Text fontSize="sm" color="gray.600">
              {bathrooms} {bathrooms === 1 ? 'Banheiro' : 'Banheiros'}
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaRuler} color="gray.500" mr="2" />
            <Text fontSize="sm" color="gray.600">
              {area}m²
            </Text>
          </Flex>
        </HStack>
      </VStack>
    </Box>
  )
}