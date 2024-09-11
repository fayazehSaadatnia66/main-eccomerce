import Image from "next/image"
import popular from "@/public/images/popular.jpg"
import { Card } from "../ui/card"
import { Button } from "../ui/button"

const ProductHorizontal = () => {
  return (
    <div className="flex flex-row  rounded-lg w-full gap-5">
      <Card className="rounded-lg overflow-hidden w-full">
        <Image src={popular} alt="popular" width={700} height={50} />
      </Card>
      <Card className="rounded-lg overflow-hidden w-full">
        <div className=" flex flex-col gap-5 ms-2 h-full w-full">
          <div className="h-[150px] flex flex-col gap-10 mt-4">
            <div className=" text-2xl mb-4">قالب مدیریت ویو جی اس vuero</div>
            <div className="text-2xl">دسته بندی:وب اپلیکیشن</div>
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
              <div className="flex flex-col">
                <div className="text-red-600">97</div>
                <div>فروش</div>
              </div>
              <div className="flex flex-col">
                <div className="text-purple-800">100٪</div>
                <div>رضایت</div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <div className="flex ">400,000</div>
                  <Button className="bg-fuchsia-700 h-[25px] w-[30px]">
                    40%
                  </Button>
                </div>
                <div>350,000 تومان</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
export default ProductHorizontal
