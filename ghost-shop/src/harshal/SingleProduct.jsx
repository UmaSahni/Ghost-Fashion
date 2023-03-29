import { Box, 
  Button, Center, 
  Container, Divider, 
  Flex, Grid, GridItem, 
  Heading, HStack, Image, 
  Link, ListItem, Radio,
   RadioGroup, Select, Stack, 
   Text, UnorderedList, useRadio,
    useRadioGroup } from '@chakra-ui/react'

    import { products } from './dummyData';

export const ItemDetails = () => {
  // const [version, setversion] = useState("")
  // const dispatch = useDispatch();
  // console.log(products)
  // const [shopButton, setShopButton] = useState(false);
  // let newproducts = products;
  function changeTheproducts(key, value){
     let  newproducts = {
          ...products,
          [key]:value
      }
      console.log(newproducts, 1)

  }
  console.log()
  const AddToBasket = () => {
      
      console.log(123);
      // console.log(nproducts);
  }
  return (
      <>
      <Box  mt={{ base:'330px', sm:'260px',  md:'0px'}} ></Box>
      <Box mb={'100px'}>
          <Heading textAlign={'center'}>Product Details</Heading>
          <Flex w={'90%'} direction={{ base:'column',  md:'row'}} justifyContent='space-around' m={'auto'} mt={'40px'}>
              <Box width={{base:'100%',md:'50%'}} justifyContent='center' >
                  <Flex justifyContent='space-around' direction='row'>
                      <Flex direction={'column'} h='100%' justifyContent='space-between'>
                         
                      </Flex>
                       {/* <Image width={400} height={400} src={`${products.image.furl}${version}${products.image.burl}`}></Image> */}
                  </Flex>
                  {/* <VerticalSwipeToSlide products={products} /> */}
                  <Box p='10px' borderRadius='8px' bg='gray.100' mt={'30px'}>

                      <Text fontSize={'18px'}>More Items</Text>
                      <hr />
                      <HStack>
                          <Box marginTop={"40px"} position={"relative"}>
                              <Grid templateColumns='repeat(3, 1fr)' gap={5} width={"100%"} margin={"auto"} zIndex={0}>
                                  {/* <ImageItem image={'https://images.urbnproducts.com/is/image/Anthropologie/4130348690217_038_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=360'} />
                                  <ImageItem image={'https://images.urbnproducts.com/is/image/Anthropologie/4130646420031_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=360'}/>
                                  <ImageItem image={'https://images.urbnproducts.com/is/image/Anthropologie/4130646420031_104_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=360'} /> */}
                              </Grid>
                          </Box>
                      </HStack>
                  </Box>



              </Box >



              <Box w={{base:'100%',md:'40%'}} p='10px'>
                  <Heading mt={{base:'10px',md:'0px'}}>Detailed Info</Heading>
                  <Text fontSize={'18px'} m={'10px'}>{products.title}</Text>
                  <Text m={'10px'}>Price : ${products.price}</Text>
                  <Box >
                      <HStack >
                          <Text m={'10px'}>Colors Available:</Text>

                          {/* {products.length&&products.color.map((el, ind) => {
                              return <Text m={'10px'} key={ind + 1}>{el.alt}</Text>
                          })} */}
                      </HStack>
                      <RadioGroup defaultValue='2'>
                          <Stack spacing={5} direction='row'>


                              {/* {products.length &&products.color.map((el, ind) => {
                                  return <Radio ml={'10px'} mb='10px' key={ind + 1} colorScheme={`${el.alt.toLowerCase()}.300`} bg={el.alt.toLowerCase()} value={el.alt.toLowerCase()}>
                                  </Radio>

                              })} */}
                          </Stack>
                      </RadioGroup>
                      <Box>
                          <Text m={'10px'}>Size**</Text>
                          <HStack ml={'10px'} mt={'18px'}>

                            {/* <Example  w='100%' value={products.size.map((el) => { */}
                               {/* return <Text key={el.id} onClick={()=>changeTheproducts('size', el.s)}>{el.s }</Text>})} /> */}
                          </HStack>
                      </Box>
                      <Box>
                          <Text m={'10px'} mt='20px'>Qty**</Text>
                          <Select  onChange={(e)=>changeTheproducts('qty',e.target.value)} m={'10px'} placeholder='Select option'>
                              <option value='1'>1</option>
                              <option value='2'>2</option>
                              <option value='3'>3</option>
                              <option value='4'>4</option>
                              <option value='5'>5</option>
                              <option value='6'>6</option>

                          </Select>
                      </Box>
                      <Button m={'10px'} mt={'20px'} zIndex='0' colorScheme='teal' w={'100%'} onClick={AddToBasket}>
                          Add To Basket
                      </Button>
                      <HStack textDecoration={'underline'} justifyContent={'space-between'} m={'10px'}>
                          <Link href={'#'} >Add To Registry</Link>
                          <Link href={'#'} >Add to Wish List</Link>
                      </HStack>

                      <Box mt={'30px'}>
                          <Text m={'10px'}>Product Details</Text>
                          <Text m={'10px'}>Style No. 82979535; Color Code: 071</Text>
                          <Text m={'10px'}>Reminiscent of the umbrellas that line the Amalfi Coast, this mixed-upholstered sofa features classic touches with hints of modern design. Its antique legs and elegant, scrolled arms beautifully highlight the striped two-cushion seat.</Text>
                          <Text m={'10px'}>For ordering assistance and more, please contact us. For aesthetic advice and tips to help decorate your space, enjoy our complimentary home styling services.</Text>
                          <Text m={'10px'}>For more information on the materials and techniques of this piece, click here.</Text>

                          <UnorderedList>
                              <ListItem>Beaufort Boucle upholstery (56% acrylic, 37% cotton, 7% polyester) and Linen</ListItem>
                              <ListItem>Two seat cushions; down feather fill</ListItem>
                              <ListItem>Sinuous spring seat construction</ListItem>
                              <ListItem>This piece is intended for indoor use</ListItem>
                          </UnorderedList>
                      </Box>

                  </Box>

              </Box>
          </Flex>
          <Box w='90%' m={'auto'}>
              <Box >
                  <Box mt={'70px'}>
                      <Text>Others Also Viewed</Text>
                      <Divider />
                      {/* <MultipleItems /> */}
                  </Box>
              </Box>
              <HStack mt={'70px'} justifyContent={'space-between'}>
                  <Text>Ratings & Reviews</Text>
                  <Text>Write a Review</Text>
              </HStack>

              <Grid mt={'20px'} templateColumns='repeat(3, 1fr)' gap={1}>
                  <GridItem w='100%' h='20' bg='orange.100'>
                      <Center direction='column' h={'100%'}>
                          <Text>4.5 stars | 2 Reviews</Text>
                          <br />
                          <HStack>
                              <svg widht='10px' height='10px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                              <svg widht='10px' height='10px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                              <svg widht='10px' height='10px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                              <svg widht='10px' height='10px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                              <svg widht='10px' height='10px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
                              <svg widht='10px' height='10px' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44zm.678 2.033v11.904l4.707 2.505-.951-5.236 3.851-3.662-5.314-.756z" fill-rule="nonzero" /></svg>
                          </HStack>
                      </Center>
                  </GridItem>
                  <GridItem w='100%' h='20' bg='orange.100'>
                      <Center h={'100%'}>100% Recommended</Center>

                  </GridItem>
                  <GridItem w='100%' h='20' bg='orange.100'>

                      <Center h={'100%'}>Customers say True to Size</Center>
                  </GridItem>
              </Grid>
              <HStack>
              </HStack>
              <Divider />
              <Box>
                  <Text>Others Also Viewed</Text>
                  <Box mt={'70px'}>
                      <Text>Trending Now</Text>
                      <Divider />
                      {/* <MultipleItems /> */}
                  </Box>
              </Box>


          </Box>


      </Box>
      </>
  )
}