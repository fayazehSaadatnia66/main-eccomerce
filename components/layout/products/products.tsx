import { Card } from "@/components/ui/card"
import phpProduct from "../../../public/images/php.png"
import accountabilityProduct from "../../../public/images/accountability.jpeg"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

const Products = () => {
  return (
    <div className="flex items-center h-6 gap-4 my-32 ms-10">
      {/* <div> */}
      {/* <div className="border-reduce-0"> <img className="w-1/2 h-auto" src={phpProduct as unknown as string} /></div> */}
      {/* <Avatar> */}
      {/* <AvatarImage src={phpProduct} /> */}
      {/* </Avatar> */}
      {/* <div>ddddd</div> */}
      {/* </div> */}

      {/* <div>ddddd</div> */}
      <div>
      <div className="w-[450px] ">
        <AspectRatio ratio={40 / 9}>
          <Image
            src={accountabilityProduct}
            alt="Image"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="w-[450px] mt-20">
        <AspectRatio ratio={40 / 5}>
          <Image
            src={phpProduct}
            alt="Image"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      </div>
      <div className="w-[450px]">
        <AspectRatio ratio={40 / 5}>
          <Image

            src={phpProduct}
            alt="Image"
            className="rounded-md object-cover h-64 w-96"
          />
        </AspectRatio>
      </div>
    </div>
  )
}

export default Products
