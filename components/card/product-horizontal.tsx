import Image from "next/image"
import popular from "@/public/images/popular.jpg"
import { Card } from "../ui/card"
import { Button } from "../ui/button"

const ProductHorizontal = () => {
  return (
    <div className="flex flex-row  rounded-lg w-full gap-5 h-[239px]">
      <Card className="rounded-lg overflow-hidden w-full ">
        <Image src={popular} alt="popular" className="h-[239px]" />
      </Card>
      <Card className="rounded-lg overflow-hidden w-full ">
        <div className=" flex flex-col gap-5 ms-2 h-[239px] w-full">
          <div className="h-[120px] flex flex-col gap-5 mt-2 font-semibold">
            <div className=" text-lg ">قالب مدیریت ویو جی اس vuero</div>
            <div className="text-lg">دسته بندی:وب اپلیکیشن</div>
          </div>
          <hr className="w-[90%] place-self-center border-1 border-black" />
          <div className="w-full h-full flex flex-row ">
            <div className="basis-3/2 flex flex-col w-full h-full gap-3">
              <Button className="bg-purple-800 w-[250px]">
                افزودن به سبد خرید
              </Button>
              <Button className="bg-gray-100 text-purple-800 w-[250px]">
                پیش نمایش
              </Button>
            </div>
            <div className="basis-auto flex  w-full h-full justify-around ">
              <div className="flex flex-col gap-2 text-center font-thin	">
                <div className="text-red-600 text-xl">97</div>
                <div className="text-lg">فروش</div>
              </div>
              <div className="flex flex-col gap-2 text-center font-thin	">
                <div className="text-purple-800 text-xl">100٪</div>
                <div className="text-lg">رضایت</div>
              </div>
              <div className="flex flex-col gap-2 text-center font-thin	">
                <div className="flex gap-3">
                  <div className="flex text-xl line-through">400,000</div>
                  <Button className="bg-fuchsia-700 h-[25px] w-[30px]">
                    40%
                  </Button>
                </div>
                <div className="text-lg font-semibold">350,000 تومان</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
export default ProductHorizontal
