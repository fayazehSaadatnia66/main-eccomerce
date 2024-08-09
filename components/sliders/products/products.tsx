import { Card } from "@/components/ui/card"
import phpProduct from "../../../public/images/php.png"
import accountabilityProduct from "../../../public/images/accountability.jpeg"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

const Products = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col w-2.5 h-2/4 ">
      <div className="w-[450px] border-solid border-2 row-span-2 col-span-2" >
        <AspectRatio ratio={16 / 9}>
          <Image
            src={accountabilityProduct}
            alt="Image"
            className="rounded-md object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
      <div className="w-[450px] border-solid border-2 row-span-2 col-span-2">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={phpProduct}
            alt="Image"
            className="rounded-md object-cover w-full h-full "
          />
        </AspectRatio>
      </div>
      {/* </div> */}
      <div className="w-[450px] border-solid border-2 row-span-3 col-span-2">
        <AspectRatio ratio={50 / 47}>
          <Image

            src={phpProduct}
            alt="Image"
            className="rounded-md object-cover w-full h-full  "
          />
        </AspectRatio>
      </div>
    </div>
//     <div className="grid grid-rows-4 grid-flow-col gap-4">
//   <div className="border-solid border-2 col-span-2  row-span-4 ... ">01</div>
//   <div className="border-solid border-2 col-span-2 row-span-2 ...">02</div>
//   <div className="border-solid border-2 col-span-2 row-span-2  ...">03</div>
// </div>
  )
}

export default Products
