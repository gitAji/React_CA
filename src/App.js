import React from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import ProductView from './pages/Product'
import ContactPage from './pages/Contact'
import ErrorPage from './pages/Error'
import Cart from './pages/Cart'
import CheckoutSuccessPage from './pages/CheckoutSuccessPage'

const App = () => {
  return (
   <>
  <Header/>
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/products" element={<ProductsPage />} />
  <Route path="/product/:id" element={<ProductView />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/success" element={<CheckoutSuccessPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="*" element={<ErrorPage />} />
 
</Routes>
<Footer/>
   </>
  )
}

export default App;