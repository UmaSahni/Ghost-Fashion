import { Box, Grid, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import womenscollection1 from "./images/womenscollection1.webp";
import womenscollection2 from "./images/womenscollection2.webp";
import womenscollection3 from "./images/womenscollection3.webp";
import womenscat1 from "./images/womenscat1.webp";
import womenscat2 from "./images/womenscat2.webp";
import womenscat3 from "./images/womenscat3.webp";
import womenscard1 from "./images/womenscard1.webp";
import womenscard2 from "./images/womenscard2.webp";
import womenscard3 from "./images/womenscard3.webp";
import womenscard4 from "./images/womenscard4.webp";
import womenstopsell1 from "./images/womenstopsell1.webp";
import womenstopsell2 from "./images/womenstopsell2.webp";
import womenstopsell3 from "./images/womenstopsell3.webp";
import womenstopsell4 from "./images/womenstopsell4.webp";
import lastcrouselwomens from "./images/lastcrouselwomens.webp";

import WomensCarousel from "./WomensCrousel";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Womens = () => {
  return (
    <div>
      <Navbar />
      <Stack style={{ marginTop: "-150px" }} w={"90%"} margin={"auto"}>
        <Box className="crousel">
          <WomensCarousel />

          <Box className="collectionmens" style={{ marginTop: "30px" }}>
            <Box>
              <Text
                fontWeight={"bold"}
                color="gray"
                fontFamily={"heading"}
                fontSize="2xl"
              >
                COLLECTIONS
              </Text>
              <Grid
                w={"97%"}
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                }}
                gap="30px"
                margin={"auto"}
                marginTop={10}
              >
                <Image src={womenscollection1} alt="collection1" />
                <Image src={womenscollection2} alt="collection2" />
                <Image src={womenscollection3} alt="collection3" />
              </Grid>
            </Box>
          </Box>
          <Box className="categorymens" style={{ marginTop: "30px" }}>
            <Box>
              <Text
                fontWeight={"bold"}
                color="gray"
                fontFamily={"heading"}
                fontSize="2xl"
              >
                CATEGORIES
              </Text>
              <Grid
                w={"97%"}
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                }}
                gap="30px"
                margin={"auto"}
              >
                <Box
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 50 }}
                >
                  <Link to={"/womensproducts"}>
                    <Image src={womenscat1} alt="collection1" />
                  </Link>
                </Box>

                <Box
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 50 }}
                >
                  <Image src={womenscat2} alt="collection1" />
                </Box>
                <Box
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 50 }}
                >
                  <Image src={womenscat3} alt="collection1" />
                </Box>
              </Grid>
            </Box>
          </Box>
        </Box>

        <Box className="mensCards" style={{ marginTop: "30px" }}>
          <Grid
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            width="97%"
            margin={"auto"}
            gap={10}
          >
            <Image src={womenscard1} alt="mendscard" />
            <Image src={womenscard2} alt="mendscard" />
            <Image src={womenscard3} alt="mendscard" />
            <Image src={womenscard4} alt="mendscard" />
          </Grid>
        </Box>

        <Box className="OFFICIAL MERCHANDISE" style={{ marginTop: "30px" }}>
          <Text
            fontWeight={"bold"}
            color="gray"
            fontFamily={"heading"}
            fontSize="2xl"
          >
            OFFICIAL MERCHANDISE
          </Text>

          <Grid
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(5,1fr)",
            }}
            gap={30}
            width="92%"
            margin="auto"
            marginTop={5}
          >
            <Box
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <Image
                src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/web-icon.jpg?format=webp&w=300&dpr=1.3"
                alt="marvel"
              />
            </Box>

            <Box
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <Image
                src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/Marvel_Logo_268x220_b16y8nC_GKd3vRA.jpg?format=webp&w=300&dpr=1.3"
                alt="marvel"
              />
            </Box>

            <Box
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <Image
                src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/HarryPotter_Logo_268x220_LqBAKZU_Y8BG6uT.jpg?format=webp&w=300&dpr=1.3"
                alt="marvel"
              />
            </Box>

            <Box
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <Image
                src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/Disnety_Logo_268x220_GevoL2M_2j5PP2v.jpg?format=webp&w=300&dpr=1.3"
                alt="marvel"
              />
            </Box>

            <Box
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <Image
                src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/DC_Logo_268x220_qtYfouo_VyuqmVD.jpg?format=webp&w=300&dpr=1.3"
                alt="marvel"
              />
            </Box>
          </Grid>
        </Box>
        <Box className="topselling" style={{ marginTop: "30px" }}>
          <Text
            fontWeight={"bold"}
            color="gray"
            fontFamily={"heading"}
            fontSize="2xl"
          >
            TOP SELLING
          </Text>
          <Grid
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(4,1fr)",
            }}
            gap={30}
            w={"95%"}
            margin="auto"
            marginTop={7}
          >
            <Image src={womenstopsell1} alt="topsell1" />
            <Image src={womenstopsell2} alt="topsell" />
            <Image src={womenstopsell3} alt="topsell" />
            <Image src={womenstopsell4} alt="topsell" />
          </Grid>
        </Box>

        <Box className="lastcrousel" style={{ marginTop: "30px" }}>
          <Image src={lastcrouselwomens} alt="last" w={"95%"} margin="auto" />
        </Box>
      </Stack>
      <Footer />
    </div>
  );
};

export default Womens;
