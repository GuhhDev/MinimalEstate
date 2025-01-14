import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import api from '../services/api';
import { useState } from 'react';

const CadastroImovel: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [beds, setBeds] = useState(1);
  const [baths, setBaths] = useState(1);
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('beds', beds.toString());
      formData.append('baths', baths.toString());
      if (image) {
        formData.append('image', image);
      }

      await api.post('/imoveis', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast({
        title: 'Imóvel cadastrado com sucesso!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      // Limpar o formulário
      setTitle('');
      setDescription('');
      setPrice('');
      setBeds(1);
      setBaths(1);
      setImage(null);
    } catch (error) {
      console.error('Erro ao cadastrar imóvel:', error);
      toast({
        title: 'Erro ao cadastrar imóvel',
        description: 'Por favor, tente novamente.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box as="main" maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl" color="brand.800">
          Cadastro de Imóvel
        </Heading>
        <Box as="form" width="100%" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Título</FormLabel>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Casa moderna com vista para o mar"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Descrição</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descreva o imóvel..."
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Preço</FormLabel>
              <Input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Ex: 1.200.000"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Quartos</FormLabel>
              <NumberInput min={1} value={beds} onChange={(value) => setBeds(Number(value))}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Banheiros</FormLabel>
              <NumberInput min={1} value={baths} onChange={(value) => setBaths(Number(value))}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Imagem</FormLabel>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
            </FormControl>
            <Button
              type="submit"
              colorScheme="brand"
              size="lg"
              width="100%"
              isLoading={isLoading}
            >
              Cadastrar Imóvel
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default CadastroImovel;

