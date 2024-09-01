import Image from "next/image"
import img from "/public/images/background.svg"

export function HeroBackground() {
  return (
    <Image
      alt="Mountains"
      src={img}
      // placeholder="blur"
      quality={50}
      // fill
      // sizes="100vw"
      width={100}
      height={100}
      style={{
        objectFit: "cover",
      }}
    />
  )
}
