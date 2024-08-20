"use client"
import { useState } from "react"
import "./three-style.scss"

import Image, { StaticImageData } from "next/image"
type ThreeCarouselProps = {
  images: {
    item: StaticImageData
    alt: string
  }[]
}
const ThreeCarousel = ({ images }: ThreeCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }
  return (
    <div className="flex gap-3 ">
      <button className="flex-1">ff</button>
       <div className="carousel">
      <div className="carousel-content flex-1">
        {images.map((img: any, index: number) => {
          return (
            <div key={index} className="carousel-item">
              <Image
                className="w-full h-full"
                width={500}
                height={900}
                src={img.item.src}
                alt={img.alt}
              />
            </div>
          )
        })}
      </div>
    </div>
    <button className="flex-1">hh</button>
   
    </div>
 
  )
}

export default ThreeCarousel
