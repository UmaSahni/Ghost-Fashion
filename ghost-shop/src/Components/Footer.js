import {
  Box,
  Container,
  Grid,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import styled from "styled-components";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
export default function Footer() {
  return (
    <>
      <Text
        p={"1"}
        color={"white"}
        bg="#E71318"
        fontFamily={"sans-serif"}
        fontSize={["xl", "2xl", "3xl", "4xl"]}
      >
        HOMEGROWN INDIAN BRAND
      </Text>
      <Text p={"2"} fontSize={["xl", "2xl", "3xl", "4xl", "5xl"]}>
        Over <Span>5.5 Million</Span> Happy Customers
      </Text>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                About Us
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Careers
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Stores Near Me
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                From The Ghost
              </Link>
              <Link
                style={{ textDecoration: "none", marginBottom: "20px" }}
                href={"#"}
              >
                Ghost Army
              </Link>
              <ListHeader>Who We Are</ListHeader>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                The Neighbourhood Store Vibe
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                The 'POP'
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                All of this for YOU
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Our Collection
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Our Ethos
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Welcome Aboard
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Navigation Links</ListHeader>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Kids
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Men
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Women
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Shop by Themes
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Get Extra Discounts
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                My Membership
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Need Help</ListHeader>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Contact Us
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Track Order
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                Returns & Refunds
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                FAQs
              </Link>
              <Link style={{ textDecoration: "none" }} href={"#"}>
                My Account
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow us on</ListHeader>
              <Grid
                templateColumns={"repeat(4,1fr)"}
                gap={{ base: "15px", lg: "30px" }}
              >
                <Link style={{ textDecoration: "none" }} href={"#"}>
                  <BsInstagram fontSize={"30px"} />
                </Link>
                <Link style={{ textDecoration: "none" }} href={"#"}>
                  <BsFacebook fontSize={"30px"} />
                </Link>
                <Link style={{ textDecoration: "none" }} href={"#"}>
                  <BsYoutube fontSize={"30px"} />
                </Link>
                <Link style={{ textDecoration: "none" }} href={"#"}>
                  <BsTwitter fontSize={"30px"} />
                </Link>
              </Grid>
            </Stack>
          </SimpleGrid>
        </Container>
        <Container maxW={"6xl"}>
          <Text
            style={{ fontWeight: "500", textAlign: "center" }}
            fontSize={"xl"}
          >
            Our Payment Partners
          </Text>
        </Container>
        <Container maxW={"6xl"} mt={"20px"}>
          <SimpleGrid
            minChildWidth={"50px"}
            alignItems={"center"}
            spacing={"20px"}
          >
            <Image
              width={"50%"}
              src="https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0"
            />
            <Image
              width={"50%"}
              src="https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0"
            />
            <Image
              width={"30%"}
              src="https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0"
            />
            <Image
              width={"40%"}
              src="https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0"
            />
            <Image
              width={"40%"}
              src="https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0"
            />
            <Image
              width={"30%"}
              src="https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0"
            />
            <Image
              width={"30%"}
              src="https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0"
            />
            <Image
              width={"30%"}
              src="https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0"
            />
            <Image
              width={"40%"}
              src="https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0"
            />
            <Image
              width={"60%"}
              src="https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0"
            />
          </SimpleGrid>
        </Container>
        <Container mt={"50"} maxW={"6xl"}>
          <Text
            style={{ fontWeight: "500", textAlign: "center" }}
            fontSize={"xl"}
          >
            Our Shipping Partners
          </Text>
        </Container>
        <Container maxW={"6xl"} mt={"20px"}>
          <SimpleGrid
            minChildWidth={"50px"}
            alignItems={"center"}
            spacing={"20px"}
          >
            <Image
              width={"50%"}
              src="https://cdn.worldvectorlogo.com/logos/fedex-express-6.svg"
            />
            <Image
              width={"50%"}
              src="https://upload.wikimedia.org/wikipedia/en/e/e7/DTDC-Courier-Logo.png"
            />
            <Image
              width={"50%"}
              src="https://upload.wikimedia.org/wikipedia/commons/2/23/Delhivery_Logo_%282019%29.png"
            />
            <Image
              width={"50%"}
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ecom-express_logo.png"
            />
            <Image
              width={"50%"}
              src="https://media.licdn.com/dms/image/C4E16AQHHSNU1x3dwCw/profile-displaybackgroundimage-shrink_200_800/0/1634551912044?e=2147483647&v=beta&t=UjBI_FenFgcVjtOEojfobCXVqbH7Pcz9xrFcJNhlY2Y"
            />
            <Image
              width={"50%"}
              src="https://cdn.worldvectorlogo.com/logos/dhl-1.svg"
            />
            <Image
              width={"50%"}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Blue_dart_logo.svg/2560px-Blue_dart_logo.svg.png"
            />
          </SimpleGrid>
          <Box py={10}>
            <Text pt={6} fontSize={"sm"} textAlign={"center"}>
              © The Souled Store 2023-24
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}


const Span=styled.span`font-weight:bold`;