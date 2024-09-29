import Image, { StaticImageData } from "next/image"
import { Card, CardContent } from "../ui/card"
import star from "@/public/images/star.png"
import { cn } from "@/lib/utils"
type ProductCardProps = {
  productName: string
  application: string
  numberSales: string
  score: number
  price: number
  img: { item: StaticImageData; alt: string }
  index: number
  className?: string
}
const ProductVertical = ({
  productName,
  application,
  numberSales,
  score,
  className,
  price,
  img,
  index,
}: ProductCardProps) => {
  return (
    <Card
      className={cn(
        "flex flex-col border-0 justify-between h-[100%]  rounded-none",
        className
      )}
    >
      {/* <CardContent className="p-0"> */}
      {/* <div className="w-full h-[120px] overflow-clip"> */}
      <Image
        loading="lazy"
        // width={250}
        // height={130}
        // fill
        // height={0}
        // sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          // objectPosition: "center",
          // height: "auto",
          // verticalAlign: "middle",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // shapeMargin: "0.75rem"
        }}
        className="overflow-hidden rounded-br-2xl"
        src={img.item}
        alt={img.alt}
      />
      <div className="flex-col rounded-bl-3xl bg-gray-100 rounded-tl-3xl border-l-gray-300">
        <div className="text-base text-gray-600 text-start ms-2">{productName}</div>
        <div className="flex mb-5 ms-2">
          <div className="text-sm text-slate-400 me-2">کاربرد:</div>
          <div className="text-sm text-gray-600">{application}</div>
        </div>
        <hr />
        <div className="flex items-center">
          <div className="flex w-[125px] justify-between">
            <div className="text-sm  text-gray-600">{numberSales} فروش</div>
            <div className="flex text-sm  me-1  text-gray-600">
              {score}
              <Image
                src={star}
                alt="star"
                style={{
                  height: "20px !important",
                  width: "20px",
                  marginRight: "10px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              borderLeft: "1px solid #e0e0e0",
              height: "55px",
              width: "0px",
            }}
          ></div>
          <div className="text-sm ms-4 text-gray-600">{price} تومان</div>
        </div>
      </div>
      {/* </CardContent> */}
    </Card>
  )
}
export default ProductVertical
