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
const ProductCard = ({
  productName,
  application,
  numberSales,
  score,
  price,
  img,
  index,
}: ProductCardProps) => {
  return (
    <Card className={`flex-col  h-[452px] w-[350px] `}>
      <CardContent className="p-0">
        <Image
          width={200}
          height={0}
          className="rounded-br-3xl w-[320px] h-[300px]  border-1  border-slate-950 mb-4"
          src={img.item.src}
          alt={img.alt}
        />
        <div className="flex-col ms-3">
          <div className="text-lg text-gray-600">{productName}</div>
          <div className="flex mb-5">
            <div className="text-sm text-slate-400 me-2">کاربرد:</div>
            <div className="text-sm text-gray-600">{application}</div>
          </div>
          <hr />
          <div className="flex items-center">
            <div className="flex w-[155px] justify-between">
              <div className="text-lg  text-gray-600">{numberSales} فروش</div>
              <div className="flex text-lg me-1  text-gray-600">
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
            <div className="text-lg ms-3  text-gray-600">{price} تومان</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default ProductCard
