import { Image, Text } from '@chakra-ui/react'
import React from 'react'
// import styled from 'styled-components'
import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Image src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/home-landing-web/Homepage-banner-Ajio.jpg?w=1500&dpr=1.3'/>
      {/* <Text p={'1'} color={'white'} bg='#E71318' fontFamily={'sans-serif'} fontSize={['xl','2xl','3xl','4xl']}>HOMEGROWN INDIAN BRAND</Text>
      <Text p={'2'} fontSize={['xl','2xl','3xl','4xl','5xl']}>Over <Span>5.5 Million</Span> Happy Customers</Text> */}
    </div>
  )
}
// const Span=styled.span`font-weight:bold`;

export default Home