import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  Select,
  Text,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineHeart,
  AiOutlineInstagram,
} from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
// import { color } from "framer-motion";
import { StandardSizes } from "./StandardSizes";
import { AddToCart } from "../Redux/cartReducer/action";
import { getSingleProduct } from "../Redux/WomenReducer/action";
// import CaptionCarousel from "./Slider";

export const SingleProduct = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  // const {isloading}=useSelector((store)=>store.cartReducer)
  const [value, setValue] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
 

const getItem=()=>{
  let items = JSON.parse(localStorage.getItem("cart")) || [];
  if (items.length > 0) {
    items.map((item) => (item.id === id ? setValue(true) : ""));
  }
}

  useEffect(() => {
    dispatch(getSingleProduct(id)).then((res) => {
      setData(res);
    }); 
    getItem()
  }, []);

  function changeTheproducts(key, value) {
    // let newproducts = {
    //   ...products,
    //   [key]: value,
    // };
    // console.log(newproducts, 1);
  }
  console.log(data);
  const AddToBasket = (e) => {
    e.preventDefault();
    dispatch(AddToCart(id));
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      getItem()
    }, 1500);
    // console.log(nproducts);
  };
  if (data === "") {
    return (
      <>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          position={"absolute"}
          top={"300px"}
        />
      </>
    );
  }
  return (
    <>
      <Navbar />
      {/* <Box
        mt={{ base: "330px", sm: "260px", md: "60px" }}
        color="rgb(41, 43, 44)"
      ></Box> */}
      <Box mb={"100px"}>
        <Flex
          w={"90%"}
          direction={{ base: "column", md: "row" }}
          justifyContent="space-around"
          m={"auto"}
          mt={"40px"}
          gap={20}
        >
          <Box width={{ base: "100%", md: "auto" }} justifyContent="center">
            <Flex justifyContent="space-evenly" direction="row" gap="2">
              <Flex
                direction={"column"}
                h="100%"
                justifyContent="space-between"
              ></Flex>
              {/* map image here */}
              <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                {data.images.map((image) => {
                  return (
                    <GridItem>
                      <Image
                        width={"100%"}
                        height={"100%"}
                        src={`https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/${image}?format=webp&w=376&dpr=1.0`}
                      />
                    </GridItem>
                  );
                })}
              </Grid>
            </Flex>
          </Box>

          <Box w={{ base: "100%", md: "40%" }}>
            <Heading
              align="left"
              mt={{ base: "10px", md: "0px" }}
              fontSize={"30px"}
            >
              {data.product}
            </Heading>
            <Text fontSize={"16px"} mt={"-5px"} align="left" color={"gray"}>
              {data.category.name}
            </Text>
            <Box borderTop={"1px"} my="20px"></Box>
            <HStack my={"20px"}>
              <Text fontSize={"25px"} fontWeight={"semibold"} align="left">
                ₹ {data.exclusivePrice}
              </Text>
              <Text
                align="left"
                style={{ textDecoration: "line-through", color: "gray" }}
              >
                ₹ {data.price}
              </Text>
              <Text align="left" color={"red"}>
                {(
                  ((data.price - data.exclusivePrice) / data.price) *
                  100
                ).toFixed(2)}
                % OFF
              </Text>
            </HStack>

            <Box>
              <HStack>
                <Text fontWeight={"semibold"} m={"10px"}>
                  Please select a size.
                </Text>
                <Link textDecoration="underline" m={"10px"} color={"#117a7a"}>
                  SIZE CHART
                </Link>
              </HStack>
              <Box my={6}>
                <StandardSizes />
              </Box>
              <Box my={5}>
                <HStack>
                  <Text>Quantity</Text>
                  <Select
                    onChange={(e) => changeTheproducts("qty", e.target.value)}
                    m={"10px"}
                    width="70px"
                    height="35px"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Select>
                </HStack>
              </Box>
              <Box mt={"20px"}>
                <HStack>
                  <Button
                  colorScheme="red"
                  bg="rgb(236, 61, 37)"
                  w={"100%"}
                  onClick={AddToBasket}
                  isDisabled={value}
                  isLoading={loading}
                  loadingText={loading?"ADDING TO THE CART":""}
                  spinnerPlacement="start"
                >
                  {value?"ADDED":"ADD TO CART"}
                </Button>

                  {/* <Button
                    colorScheme="red"
                    bg="rgb(236, 61, 37)"
                    w={"100%"}
                    onClick={AddToBasket}
                    isDisabled={value}
                    loadingText={value?"Adding to the Text":"Added"}
                    spinnerPlacement="start"
                  >
                   ADD TO CART
                  </Button> */}
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    // leftIcon={<heartIcon />}
                    w={"80%"}
                    onClick={AddToBasket}
                  >
                    <Icon as={AiOutlineHeart} mr="1px" /> ADD TO WISHLIST
                  </Button>
                </HStack>
              </Box>
              <Box my={"25px"}>
                <HStack>
                  <Text align="left" fontSize={"14px"}>
                    Share
                  </Text>
                  <Icon
                    cursor={"pointer"}
                    as={ImWhatsapp}
                    boxSize={5}
                    mr="5px"
                  />
                  <Icon
                    cursor={"pointer"}
                    as={AiFillFacebook}
                    boxSize={6}
                    mr="5px"
                  />
                  <Icon
                    cursor={"pointer"}
                    as={AiFillLinkedin}
                    boxSize={6}
                    mr="5px"
                  />
                  <Icon
                    cursor={"pointer"}
                    as={AiOutlineInstagram}
                    boxSize={6}
                    mr="5px"
                  />
                </HStack>
              </Box>

              <Accordion
                defaultIndex={[0]}
                textAlign="left"
                borderRight={"1px"}
                borderLeft={"1px"}
                borderColor={"gray.300"}
                allowToggle
              >
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Heading fontSize={"16px"} flex="1">
                        Product Details
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} p="30px" pt={5}>
                    <Heading pb={2} fontSize={"14px"}>
                      Material & Care:
                    </Heading>
                    <Text mb={2} fontSize="sm">
                      100% Rayon
                    </Text>
                    <Text mb={2} fontSize="sm">
                      Machine Wash
                    </Text>
                    <HStack mb={7} mt={6}>
                      <Heading fontSize={"14px"}>Country of Origin: </Heading>
                      <Text as="h1" fontSize="sm">
                        India (and proud)
                      </Text>
                    </HStack>
                    <Box>
                      <Heading pb={2} fontSize={"14px"}>
                        Manufactured & Sold By:{" "}
                      </Heading>
                      <Text mb={2} fontSize="sm">
                        The Souled Store Pvt. Ltd.
                      </Text>
                      <Text mb={2} fontSize="sm">
                        224, Tantia Jogani Industrial Premises
                      </Text>
                      <Text mb={2} fontSize="sm">
                        J.R. Boricha Marg
                      </Text>
                      <Text mb={2} fontSize="sm">
                        Lower Parel (E)
                      </Text>
                      <Text mb={2} fontSize="sm">
                        Mumbai - 11
                      </Text>
                      <Text mb={2} fontSize="sm">
                        connect@thesouledstore.com
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Heading fontSize={"16px"} flex="1" textAlign="left">
                        Product Description
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} p="30px" pt={5}>
                    <Heading pb={2} fontSize={"14px"}>
                      Official Licensed {data.product} {data.category.name}.
                    </Heading>
                    <Text fontSize="sm" mb={7} mt={6}>
                      Buy this {data.product} {data.category.name} for{" "}
                      {data.genderType === 1 ? "Men" : "Women"} at The Souled
                      Store.
                    </Text>
                    <Heading pb={2} fontSize={"14px"}>
                      MRP: Rs. 1999/- incl. of all taxes
                    </Heading>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Box>
        </Flex>
        <Box w="90%" m={"auto"}>
          <Box>
            <Box mt={"70px"}>
              <Text>Others Also Viewed</Text>
              <Divider />
              {/* <MultipleItems /> */}
            </Box>
          </Box>
          <HStack mt={"70px"} justifyContent={"space-between"}>
            <Text>Ratings & Reviews</Text>
            <Text>Write a Review</Text>
          </HStack>

          <Grid mt={"20px"} templateColumns="repeat(3, 1fr)" gap={1}>
            <GridItem w="100%" h="20" bg="orange.100">
              <Center direction="column" h={"100%"}>
                <Text>4.5 stars | 2 Reviews</Text>
                <br />
                <HStack>
                  <svg
                    widht="10px"
                    height="10px"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <svg
                    widht="10px"
                    height="10px"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <svg
                    widht="10px"
                    height="10px"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <svg
                    widht="10px"
                    height="10px"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <svg
                    widht="10px"
                    height="10px"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <svg
                    widht="10px"
                    height="10px"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44zm.678 2.033v11.904l4.707 2.505-.951-5.236 3.851-3.662-5.314-.756z"
                      fill-rule="nonzero"
                    />
                  </svg>
                </HStack>
              </Center>
            </GridItem>
            <GridItem w="100%" h="20" bg="orange.100">
              <Center h={"100%"}>100% Recommended</Center>
            </GridItem>
            <GridItem w="100%" h="20" bg="orange.100">
              <Center h={"100%"}>Customers say True to Size</Center>
            </GridItem>
          </Grid>
          <HStack></HStack>
          <Divider />
          <Box>
            <Text>Others Also Viewed</Text>
            <Box mt={"70px"}>
              <Text>Trending Now</Text>
              <Divider />
              {/* <MultipleItems /> */}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
      {/* <CaptionCarousel /> */}
    </>
  );
};
