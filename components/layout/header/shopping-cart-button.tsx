import React from "react"
import { PiShoppingCartLight } from "react-icons/pi"
import shopCart from "/public/images/shopping-cart.svg"
import Image from "next/image"
export const ShoppingCartButton = () => {
  return <Image alt="shopping-cart" width={22} src={shopCart} />
  //   return <PiShoppingCartLight className="transform scale-x--1" size={28} />
}
