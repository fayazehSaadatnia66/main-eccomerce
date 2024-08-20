import phpProduct from "../../public/images/php.png"
import accountabilityProduct from "../../public/images/accountability.jpeg"
import Image from "next/image"
import programProduct from "../../public/images/Programming.jpeg"
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props"

type TripleBannerProps = {
  item: {
    top: {
      src: StaticImageData
      alt: string
    }
    bottom: {
      src: StaticImageData
      alt: string
    }
    left: {
      src: StaticImageData
      alt: string
    }
  }
}
export const TripleBanner = ({ item }: TripleBannerProps) => {
  console.log(item)
  return (
    <div className="flex gap-2 h-[380px] mb-5">
      <div className="basis-1/2 flex-col gap-2 flex">
        <div className="h-1/2 bg-gray-700 overflow-hidden rounded-md">
          <Image
            src={accountabilityProduct}
            className="w-full h-full"
            alt="accountability source"
          />
        </div>
        <div className="h-1/2 bg-red-500 overflow-hidden rounded-md ">
          <Image className=" w-full h-full" src={phpProduct} alt="php source" />
        </div>
      </div>
      <div className="basis-1/2 bg-blue-500">
        <Image
          src={programProduct}
          width={0}
          height={0}
          style={{ width: "100%" }}
          alt="program source"
        />
      </div>
    </div>
  )
}
