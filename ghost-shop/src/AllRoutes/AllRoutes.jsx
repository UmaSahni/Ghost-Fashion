import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
// import Cart from '../harshal/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import NotFound from '../Pages/NotFound'
import Payment from '../Pages/Payment'
import {SingleProduct} from '../harshal/SingleProduct'
import SingleEdit from '../Uma_Sahni/Admin/SingleEdit'
import NewPostPage from '../Uma_Sahni/Admin/NewPostPage'
import EditPostPage from '../Uma_Sahni/Admin/EditPostPage'
import { WomensProduct } from '../neha/WomensProduct'
import Womens from '../neha/Womens'
import Mens from '../neha/Mens'
import { MensProduct } from '../neha/MensProduct'
import Delivery from '../Uma_Sahni/Admin/Delivery'
import Cart from '../harshal/Cart'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/women'element={<Womens/>} />
     <Route path='/womenlist'element={<WomensProduct/>} />
     <Route path='/men'element={<Mens/>} />
     <Route path='/menlist'element={<MensProduct/>} />
     <Route path='/details/:id'element={<SingleProduct/>} />
     <Route path='/cart'element={<Cart/>} />
     <Route path='/payment'element={<PrivateRoute><Payment/></PrivateRoute>} />
     <Route path='/login'element={<Login/>} />
     <Route path='*'element={<NotFound/>} />
     <Route path='/admin'element={<Admin/>} />
      <Route path='/newPost'element={<NewPostPage/>} />
      <Route path='/admin/:id'element={<SingleEdit/>} />
      <Route path='/editPost'element={<EditPostPage/>} />
      <Route path="/delivery" element={<Delivery/>} />
    </Routes>
  )
}

export default AllRoutes