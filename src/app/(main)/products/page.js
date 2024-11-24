import ProductsPromo from '@/sections/poducts/product-promo'
import Products from '@/sections/poducts/products'
import React from 'react'

export default function page() {
  return (
    <div className='flex lg:flex-row md:flex-row flex-col' >
        <ProductsPromo/>
        <Products/>
    </div>
  )
}
