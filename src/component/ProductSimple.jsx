import { 
    Stack,
    Box,
    Center,
    useColorModeValue,
    Text,
    Image,} from "@chakra-ui/react"



  export default function ProductSimple({image,title,price,oprice}) {
    return (
      <Center py={12} >
     
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.500')}
          boxShadow={'1xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'container'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text fontSize={'1xl'} fontFamily={'body'} color={"gray.600"}>
              {title}
            </Text>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={600} fontSize={'xl'}>
              ₹{price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.500'}>
              ₹{oprice}
              </Text>
            </Stack>
          </Stack>
        </Box>
      
      </Center>
    );
  }