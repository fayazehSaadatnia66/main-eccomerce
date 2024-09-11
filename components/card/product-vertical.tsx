import Image, { StaticImageData } from "next/image"
import { Card, CardContent } from "../ui/card"
import star from "@/public/images/star.png"
type ProductCardProps = {
  productName: string
  application: string
  numberSales: string
  score: number
  price: number
  img: { item: StaticImageData; alt: string }
  index: number
}
const ProductVertical = ({
  productName,
  application,
  numberSales,
  score,
  price,
  img,
  index,
}: ProductCardProps) => {
  return (
    <Card
      className={`flex flex-col gap-4 border-0 justify-between h-full rounded-none`}
    >
      {/* <CardContent className="p-0"> */}
      {/* <div className="w-full h-[120px] overflow-clip"> */}
      <Image
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
        className="overflow-hidden"
        // className="rounded-br-3xl w-[320px] h-[300px]  border-1  border-slate-950 mb-4"
        src={img.item}
        alt={img.alt}
      />
      {/* </div> */}
      <div className="flex-col ms-3">
        <div className="text-lg text-gray-600">{productName}</div>
        <div className="flex mb-5">
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
          <div className="text-sm ms-1 text-gray-600">{price} تومان</div>
        </div>
      </div>
      {/* </CardContent> */}
    </Card>
  )
}
export default ProductVertical
