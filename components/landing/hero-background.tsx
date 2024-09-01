import Image from "next/image"
import img from "@/public/images/background.svg"

export function HeroBackground() {
  return (
    <Image
      alt="Mountains"
      src={img}
      // placeholder="blur"
      quality={50}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
  )
}
