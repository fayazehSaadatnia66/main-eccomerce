import React from "react"
// import shopCart from "/public/images/shopping-cart.svg"

import Image from "next/image"
import { CiShoppingBasket } from "react-icons/ci"
import { HiOutlineShoppingCart } from "react-icons/hi"
export const ShoppingCartButton = () => {
  return (
    <HiOutlineShoppingCart className="text-white z-10 h-7 w-7 cursor-pointer" />
    // <Image
    //   className="cursor-pointer"
    //   alt="shopping-cart"
    //   width={30}
    //   src={shopCart}
    // />
  )
}
