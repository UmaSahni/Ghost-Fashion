
import { Box, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Carousel from '../Components/Crousel';
import collectionmens1 from "../images/collectionmens1.webp"
import collectionmens3 from "../images/collectionmens3.webp"
import collectionmens2 from "../images/collectionmens2.webp"
import menscat1 from "../images/menscat1.webp"
import menscat2 from "../images/menscat2.webp"
import menscat3 from "../images/menscat3.webp"
import { motion } from "framer-motion"
import mmenscard1 from "../images/menscard1.webp"
import mmenscard2 from "../images/menscard2.webp"
import mmenscard3 from "../images/menscard3.webp"
import mmenscard4 from "../images/menscard4.webp"
import mmenscard5 from "../images/menscard5.webp"
import mmenscard6 from "../images/menscard6.webp"
import mmenscard7 from "../images/menscard7.webp"
import mmenscard8 from "../images/menscard8.webp"
import mmenscard9 from "../images/menscard9.webp"
import mmenscard10 from "../images/menscard10.webp"
import mmenscard11 from "../images/menscard11.webp"
import mmenscard12 from "../images/menscard12.webp"
import topsel1 from "../images/topsel1.webp"
import topsell2 from "../images/topsell2.webp"
import topsell3 from "../images/topsell3.webp"
import topsell4 from "../images/topsell4.webp"
import lastcrousel from "../images/lastcrousel.webp"
import { Link } from 'react-router-dom';

export const Mens = () => {
  return (
    <div style={{marginTop:"120px"}} >
         <div className='crousel' >
            <div>
            <Carousel/>

            </div>
            <div className='collectionmens' style={{marginTop:"30px"}}>
             <Box>
                 <Text fontWeight={"bold"} fontSize="4xl">COLLECTIONS</Text>
               <Grid w={"97%"} gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)" , lg:"repeat(3,1fr)"}} gap="30px" margin={"auto"} marginTop={10}>
                  <Image src={collectionmens1} alt="collection1"/>
                  <Image src={collectionmens3} alt="collection2"/>
                  <Image src={collectionmens2} alt="collection3"/>
               </Grid>

             </Box>

            </div>
            <motion.div   
           
            className='categorymens' style={{marginTop:"30px"}}>
             <Box>
                 <Text fontWeight={"bold"} fontSize="4xl">CATEGORIES</Text>
               <Grid w={"97%"} gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)" , lg:"repeat(3,1fr)"}} gap="30px" margin={"auto"} marginTop={10}>
                  <motion.Box
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 50 }}
                  >
                  <Image 
                  src={menscat1} alt="collection1"/>
                  </motion.Box>
                  
                  <motion.Box
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 50 }}
                  >
                  <Image 
                  src={menscat2} alt="collection1"/>
                  </motion.Box>
                  <motion.Box
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.9 }}
                   transition={{ type: "spring", stiffness: 400, damping: 50 }}
                  >
                  <Image 
                  src={menscat3} alt="collection1"/>
                  </motion.Box>
               </Grid>

             </Box>

            </motion.div>
        </div>


         <div className='mensCards' style={{marginTop:"30px"}}>
           <Grid gridTemplateColumns={{base:"repeat(2,1fr)", md:"repeat(3,1fr)" , lg:"repeat(4,1fr)"}} width="97%" margin={"auto"} gap={10}>

            <Link to={"/mensproducts"}><Image src={mmenscard1} alt="mendscard" /></Link>
            <Image src={mmenscard2}  alt="mendscard"/>
            <Image src={mmenscard3} alt="mendscard"/>
            <Image src={mmenscard4} alt="mendscard"/>
            <Image src={mmenscard5} alt="mendscard"/>
            <Image src={mmenscard6} alt="mendscard"/>
            <Image src={mmenscard7} h={343} alt="mendscard"/>
            <Image src={mmenscard8} alt="mendscard"/>
            <Image src={mmenscard9} alt="mendscard"/>
            <Image src={mmenscard10} alt="mendscard"/>
            <Image src={mmenscard11} alt="mendscard"/>
            <Image src={mmenscard12} w={"100%"} h={343} alt="mendscard"/>
            

           </Grid>

         </div>

         <div className='OFFICIAL MERCHANDISE' style={{marginTop:"30px"}}>
         <Text fontWeight={"bold"} fontSize="4xl">OFFICIAL MERCHANDISE</Text>
             
             <Grid gridTemplateColumns={{base:"repeat(2,1fr)", md:"repeat(3,1fr)" , lg:"repeat(5,1fr)"}} gap={30} width="92%" margin="auto" marginTop={5}>
                 <motion.Box
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.9 }}
                   transition={{ type: "spring", stiffness: 100, damping: 10 }}
                 ><Image src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/web-icon.jpg?format=webp&w=300&dpr=1.3' alt='marvel'/></motion.Box>
                
                <motion.Box
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.9 }}
                   transition={{ type: "spring", stiffness: 100, damping: 10 }}
                 ><Image src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/Marvel_Logo_268x220_b16y8nC_GKd3vRA.jpg?format=webp&w=300&dpr=1.3' alt='marvel'/></motion.Box>
                
                <motion.Box
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.9 }}
                   transition={{ type: "spring", stiffness: 100, damping: 10 }}
                 ><Image src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/HarryPotter_Logo_268x220_LqBAKZU_Y8BG6uT.jpg?format=webp&w=300&dpr=1.3' alt='marvel'/></motion.Box>
                
                <motion.Box
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.9 }}
                   transition={{ type: "spring", stiffness: 100, damping: 10 }}
                 ><Image src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/Disnety_Logo_268x220_GevoL2M_2j5PP2v.jpg?format=webp&w=300&dpr=1.3' alt='marvel'/></motion.Box>
                 
                 <motion.Box
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.9 }}
                   transition={{ type: "spring", stiffness: 100, damping: 10 }}
                 ><Image src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/DC_Logo_268x220_qtYfouo_VyuqmVD.jpg?format=webp&w=300&dpr=1.3' alt='marvel'/></motion.Box>

             </Grid>

         </div>
               <div className='topselling' style={{marginTop:"30px"}}>
               <Text fontWeight={"bold"} fontSize="4xl">TOP SELLING</Text>
                 <Grid gridTemplateColumns={{base:"repeat(2,1fr)", md:"repeat(2,1fr)" , lg:"repeat(4,1fr)"}} gap={30} w={"95%"} margin="auto" marginTop={7}>
                  <Image src={topsel1} alt="topsell1"/>
                  <Image src={topsell2} alt="topsell"/>
                  <Image src={topsell3} alt="topsell"/>
                  <Image src={topsell4} alt="topsell"/>
                 </Grid>
               </div>


               <div className='lastcrousel' style={{marginTop:"30px"}} >
                <Image src={lastcrousel} alt='last' w={"95%"} margin="auto"/>
               </div>
    </div>
  );
}


