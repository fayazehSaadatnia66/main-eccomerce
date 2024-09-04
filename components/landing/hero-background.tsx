import Image from "next/image"
import img from "/public/images/hero2-a.jpg"
import "./hero-background.scss"

export function HeroBackground() {
  return (
    <Image
      className="xxx absolute"
      alt="Mountains"
      src={img}
      // placeholder="blur"
      // quality={100}
      fill
      sizes="100vw"
      // width={100}
      // height={120}
      style={{
        objectFit: "cover"
        // objectPosition: "100px 200px"
        // height: 1500
      }}
    />
  )
}
