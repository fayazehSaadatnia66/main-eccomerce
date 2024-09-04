import React from "react"
import shopCart from "/public/images/shopping-cart.svg"
import Image from "next/image"
export const ShoppingCartButton = () => {
  return (
    <Image
    className="filter invert brightness-0 cursor-pointer"
    alt="shopping-cart"
      width={30}
      src={shopCart}
    />
  )
}
