import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import BrowseRange from './Components/BrowseRange/BrowseRange.jsx'
import Nav from './Components/Nav/Nav.jsx'
import Hero from './Components/Hero/Hero.jsx'
import GridCard from './Components/GridCard/GridCard.jsx'
import Room from './Components/Room/Room.jsx'
import GridCard2 from './Components/GridCard2/GridCard2.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Product from './Components/Product/Product.jsx'
import ShopimgSec from './Components/ShopimgSec/ShopimgSec.jsx'
import ShopSec from './Components/ShopSec/ShopSec.jsx'
import AsgaardSofa from './Components/AsgaardSofa/AsgaardSofa.jsx'
import DescripSec from './Components/DescripSec/DescripSec.jsx'
import RelatedProducts from './Components/RelatedProducts/RelatedProducts.jsx'
import ShoppingCard from './Components/ShoppingCard/ShoppingCard.jsx'
import ProductPage1 from './Components/ProductPage1/ProductPage1.jsx'
import ProductGeneral from './Components/ProductGeneral/ProductGeneral.jsx'
import ProductPage2 from './Components/ProductPage2/ProductPage2.jsx'
import Dimensions from './Components/Dimensions/Dimensions.jsx'
import Warranty from './Components/WarrantySec/WarrantySec.jsx'
import FooterSec from './Components/FooterSec/FooterSec.jsx'
import CartSec2 from './Components/CartSec2/CartSec2.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import ErrorLeft from './Components/ErrorLeft/ErrorLeft.jsx'
import ErrorRight from './Components/ErrorRight/ErrorRight.jsx'
import ErrorLogo from './Components/ErrorLogo/ErrorLogo.jsx'

import Home from './Components/pages/Home/Home'
import Shop from './Components/pages/Shop/Shop'
import About from './Components/pages/About/About'
import CardSlider from './Components/pages/CardSlider/CardSlider'
import ProductComparison from './Components/pages/ProductComparison/ProductComparison.jsx'
import Cart from './Components/pages/Cart/Cart.jsx'
import Checkout from './Components/pages/Checkout/Checkout.jsx'
import Contact from './Components/pages/Contact/Contact.jsx'
import Blog from './Components/pages/Blog/Blog.jsx'
import Error from './Components/pages/Error/Error.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/cardslider' element={<CardSlider/>}></Route>
      <Route path='/productcomparison' element={<ProductComparison/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='*' element={<Error/>}></Route>
     </Routes>
    </>
  )
}

export default App;
