import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Link,
  Spacer,
  Text,
  Icon,
} from "@chakra-ui/react";
import { TfiGift } from "react-icons/tfi";
import { useSelector } from "react-redux";
import CartCard from "../Components/CartCard";
const Cart = () => {
  const { cart } = useSelector((store) => store.cartReducer);
  console.log(cart);
  return (
    <>
      <Grid
      fontFamily={"sans-serif"}
        h="auto"
        w={"90%"}
        m="auto"
        my={"50px"}
        // templateRows="repeat(3, 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
      >
        {/* cart cart */}
        <GridItem colSpan={5}>
          {cart.map((item) => {
            return <CartCard {...item} />;
          })}
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Box>
              <Button
                size="md"
                w={"100%"}
                colorScheme="teal"
                variant="solid"
                fontWeight={"bold"}
              >
                PLACE ORDER
              </Button>
            </Box>
            <Box
              p={"20px"}
              bg="rgb(255,185,81)"
              my={"10px"}
              borderRadius="5px"
              textAlign={"left"}
            >
              <Checkbox>
                <Text fontWeight={"bold"} fontSize="14px">
                  Save an additional ₹ 100 on this order.
                </Text>
              </Checkbox>
            </Box>
            <Box>
              <Accordion allowToggle border={"1px"} borderColor="gray.300">
                <AccordionItem
                  py={"5px"}
                  borderBottom={"1px"}
                  borderTop={"none"}
                  borderColor="gray.300"
                >
                  <h2>
                    <AccordionButton fontSize={"14px"}>
                      <Image
                        mr={"10px"}
                        width={"20px"}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAMAAAB5awL4AAAARVBMVEVHcEw1vK9IjYVYWFpXWFpXWFpVWlpLYWxYWFpXWFo2vK42va5YWFw2va5XWFpYWFo2va9YWFpXWVo2va5XWFpYWVs3va7cWG+0AAAAFXRSTlMARyDAXNAwEKDwp+xAynDgf4CQabANvZKzAAABeElEQVRIx5WUWxaDIAxEAVEUbbW+9r/UBlQQCEHz0WORK0kmA2NEyLbagqjbgZHRRMARM3nIhsdMI90vTEXJGlaz6bUme5EsK1hfKUQhLwScjhLKVN/iX4M3KFLnkQzTGOTL3jBNB8vS5b9MeuIFZgCkc8jU7yY+nGKsLM31T+9X8DzzhaXRIQts1gufPvveixwTyeK+D+fpDBMhHAo5u++eIiaRBVKb/IkYkyrJfUZQEMI0Y6KkgJ0qyvLOhEqeAf3Spl9L75o9bFt1yRIo6Q6yitof7ds0Y0reKupPSbXyG6VTsm7QEbd6utExYvxog51coF/lnxQrxuFEu5EyWMaJ80PEOvGohY2pLChy1w+eRRkJnbjiylBONMNQhGTgxDPTjiwJ0Q8dz9KdKm5tfHynEhdn/pVa3VhEsozEnYrPaaHUGYFkqaWp72RZunjLN1YyN4c+lYITsZKfOtGrq5460e99g5zqjoUJRNV9iUCPu9xtRzqZJv4YTCbCeHS4sAAAAABJRU5ErkJggg=="
                        alt="tag"
                      />
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        Apply Coupon
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box pt="15px" borderTop={"1px"} borderColor="gray.300">
                      <Input
                        size="sm"
                        mr={"20px"}
                        w={"50%"}
                        borderRadius={"10px"}
                        placeholder="Enter Code Here"
                      />
                      <Button
                        size="sm"
                        w={"40%"}
                        colorScheme="black"
                        variant="outline"
                        fontWeight={"bold"}
                      >
                        APPLY
                      </Button>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  py={"5px"}
                  borderBottom={"1px"}
                  borderTop={"none"}
                  borderColor="gray.300"
                >
                  <h2>
                    <AccordionButton fontSize={"14px"}>
                      <Image
                        mr={"10px"}
                        width={"20px"}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAMAAAB5awL4AAAARVBMVEVHcEw1vK9IjYVYWFpXWFpXWFpVWlpLYWxYWFpXWFo2vK42va5YWFw2va5XWFpYWFo2va9YWFpXWVo2va5XWFpYWVs3va7cWG+0AAAAFXRSTlMARyDAXNAwEKDwp+xAynDgf4CQabANvZKzAAABeElEQVRIx5WUWxaDIAxEAVEUbbW+9r/UBlQQCEHz0WORK0kmA2NEyLbagqjbgZHRRMARM3nIhsdMI90vTEXJGlaz6bUme5EsK1hfKUQhLwScjhLKVN/iX4M3KFLnkQzTGOTL3jBNB8vS5b9MeuIFZgCkc8jU7yY+nGKsLM31T+9X8DzzhaXRIQts1gufPvveixwTyeK+D+fpDBMhHAo5u++eIiaRBVKb/IkYkyrJfUZQEMI0Y6KkgJ0qyvLOhEqeAf3Spl9L75o9bFt1yRIo6Q6yitof7ds0Y0reKupPSbXyG6VTsm7QEbd6utExYvxog51coF/lnxQrxuFEu5EyWMaJ80PEOvGohY2pLChy1w+eRRkJnbjiylBONMNQhGTgxDPTjiwJ0Q8dz9KdKm5tfHynEhdn/pVa3VhEsozEnYrPaaHUGYFkqaWp72RZunjLN1YyN4c+lYITsZKfOtGrq5460e99g5zqjoUJRNV9iUCPu9xtRzqZJv4YTCbCeHS4sAAAAABJRU5ErkJggg=="
                        alt="tag"
                      />
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        Gift Voucher
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} align="left">
                    <Box p="15px" borderTop={"1px"} borderColor="gray.300">
                      <Link
                        fontSize={"14px"}
                        color={"teal"}
                        textDecoration="underline"
                      >
                        Login To Apply
                      </Link>
                      <Spacer m={"15px"} />
                      <Input
                        size="sm"
                        mr={"20px"}
                        w={"50%"}
                        borderRadius={"10px"}
                        placeholder="Enter Code Here"
                      />
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  py={"5px"}
                  borderBottom={"1px"}
                  borderTop={"none"}
                  borderColor="gray.300"
                >
                  <h2>
                    <AccordionButton fontSize={"14px"}>
                      {/* <Image
                        mr={"10px"}
                        width={"20px"}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAMAAAB5awL4AAAARVBMVEVHcEw1vK9IjYVYWFpXWFpXWFpVWlpLYWxYWFpXWFo2vK42va5YWFw2va5XWFpYWFo2va9YWFpXWVo2va5XWFpYWVs3va7cWG+0AAAAFXRSTlMARyDAXNAwEKDwp+xAynDgf4CQabANvZKzAAABeElEQVRIx5WUWxaDIAxEAVEUbbW+9r/UBlQQCEHz0WORK0kmA2NEyLbagqjbgZHRRMARM3nIhsdMI90vTEXJGlaz6bUme5EsK1hfKUQhLwScjhLKVN/iX4M3KFLnkQzTGOTL3jBNB8vS5b9MeuIFZgCkc8jU7yY+nGKsLM31T+9X8DzzhaXRIQts1gufPvveixwTyeK+D+fpDBMhHAo5u++eIiaRBVKb/IkYkyrJfUZQEMI0Y6KkgJ0qyvLOhEqeAf3Spl9L75o9bFt1yRIo6Q6yitof7ds0Y0reKupPSbXyG6VTsm7QEbd6utExYvxog51coF/lnxQrxuFEu5EyWMaJ80PEOvGohY2pLChy1w+eRRkJnbjiylBONMNQhGTgxDPTjiwJ0Q8dz9KdKm5tfHynEhdn/pVa3VhEsozEnYrPaaHUGYFkqaWp72RZunjLN1YyN4c+lYITsZKfOtGrq5460e99g5zqjoUJRNV9iUCPu9xtRzqZJv4YTCbCeHS4sAAAAABJRU5ErkJggg=="
                        alt="tag"
                      /> */}

                      <Icon
                        as={TfiGift}
                        boxSize={5}
                        color="teal.600"
                        mr="10px"
                      />
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        Gift Wrap (₹ 25)
                      </Box>
                      <Checkbox colorScheme="teal" />
                    </AccordionButton>
                  </h2>
                </AccordionItem>
                <AccordionItem py={"5px"} border={"none"}>
                  <h2>
                    <AccordionButton fontSize={"14px"}>
                      <Image
                        mr={"10px"}
                        width={"20px"}
                        src="https://tss-static-images.gumlet.io/icons/tss-money.png"
                        alt="tag"
                      />
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        TSS Money / TSS Points
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} align="left">
                    <Box p="15px" borderTop={"1px"} borderColor="gray.300">
                      <Link
                        fontSize={"14px"}
                        color={"teal"}
                        textDecoration="underline"
                      >
                        Login To Apply
                      </Link>
                      <Spacer m={"15px"} />
                      <Input
                        size="sm"
                        mr={"20px"}
                        w={"50%"}
                        borderRadius={"10px"}
                        placeholder="Enter Code Here"
                      />
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box>
              <Text
                align={"left"}
                fontWeight="500"
                fontSize={"14px"}
                my={"20px"}
                color={"gray"}
              >
                BILLING DETAILS
              </Text>
              <Box border={"1px"} borderColor={"gray.300"}>
                <Box p={"15px"} borderBottom={"1px"} borderColor={"gray.300"}>
                  <Flex justifyContent={"space-between"}>
                    <Text fontSize={"14px"}>Cart Total</Text>
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      ₹ 1399.11
                    </Text>
                  </Flex>
                </Box>
                <Box p={"15px"} borderBottom={"1px"} borderColor={"gray.300"}>
                  <Flex color={"teal.600"} justifyContent={"space-between"}>
                    <Text fontSize={"14px"}>Discount</Text>
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      - ₹ 200.00
                    </Text>
                  </Flex>
                </Box>
                <Box p={"15px"} borderBottom={"1px"} borderColor={"gray.300"}>
                  <Flex justifyContent={"space-between"}>
                    <Text fontSize={"14px"}>GST</Text>
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      ₹ 143.89
                    </Text>
                  </Flex>
                </Box>
                <Box p={"15px"} borderBottom={"1px"} borderColor={"gray.300"}>
                  <Flex justifyContent={"space-between"}>
                    <Text fontSize={"14px"}>Shipping Charges</Text>
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      ₹ 0
                    </Text>
                  </Flex>
                </Box>
                <Box p={"15px"}>
                  <Flex justifyContent={"space-between"}>
                    <Text fontSize={"14px"}>Total Amount</Text>
                    <Text fontSize={"14px"} fontWeight={"bold"}>
                      ₹ 1343.00
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Cart;
