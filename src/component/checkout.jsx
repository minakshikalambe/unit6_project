import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Flex,
    Image,
    useDisclosure,
    Box
  } from '@chakra-ui/react'
function CheckOut({cart,checkoutHandler}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <Box>
         <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg="gray.400"
            color="black"
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            style={{backgroundColor:"rgb(244,51,151)"}}
            onClick={onOpen}
            >
             Checkout
          </Button>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Purchase</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               {cart.map(product=>{
                   return(
                    <Box key={product.id} mb="1rem">
                        <Flex>
                            <Box>
                                <Image src={product.image} objectFit={'contain'}border={'1px solid red'} alt="product img" boxSize={'100px'}/>
                            </Box>
                            <Box maxW={"250px"} ml="1rem">
                                <Text fontSize={"lg"}>{product.title}</Text>
                            </Box>
                        </Flex>

                    </Box>
                   )
               })}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={checkoutHandler}
              style={{backgroundColor:"rgb(244,51,151)"}}
              >
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }
  export default CheckOut