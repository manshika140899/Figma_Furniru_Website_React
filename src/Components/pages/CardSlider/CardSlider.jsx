import React from 'react'
import Nav from '../../Nav/Nav'
import ShoppingCard from '../../ShoppingCard/ShoppingCard'
import AsgaardSofa from '../../AsgaardSofa/AsgaardSofa'
import DescripSec from '../../DescripSec/DescripSec'
import RelatedProducts from '../../RelatedProducts/RelatedProducts'
import Footer from '../../Footer/Footer'
import { useState } from 'react'

const CardSlider = () => {
      const [isOpen, setIsOpen] = useState(true);
       console.log(isOpen);
  return (
    <div>
      <Nav/>
         <ShoppingCard
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <AsgaardSofa/>
      <DescripSec/>
      <RelatedProducts/>
      <Footer/>
    </div>
  )
}

export default CardSlider
