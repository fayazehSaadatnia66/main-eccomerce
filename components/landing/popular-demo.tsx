import { PiAngularLogoLight } from "react-icons/pi"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Button } from "../ui/button"

const PopularDemo = () => {
  return (
    <div className="bg-violet-200 h-[350px] flex mt-28 ">
      <div className=" flex justify-center  relative bottom-[80px] right-[50px]">
        <Card className="w-[1000px] h-[420px] bg-gradient-to-l from-purple-700 to-indigo-700">
          <CardHeader>
            <div className="flex justify-between items-center text-white">
              <div className="flex">
                <div className="flex w-[120px]">
                  <div className="w-1/4 flex items-center h-[21px]">
                    <PiAngularLogoLight size={36} />
                  </div>
                  <div className="text-xs w-[100px] text-center font-bold">
                    قالب و اپلیکیشن استراپرو
                  </div>
                </div>
              </div>
              <div className="flex text-sm gap-5 ">
                <div>خانه</div>
                <div>وب سایت های آماده</div>
                <div>درباره اپلیکیشن</div>
                <div>امکانات قالب</div>
                <div>ووکامرس</div>
                <div>نظرات کاربران</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col h-[300px] gap-5 text-center place-content-center">
              <div className="text-3xl text-white font-bold">
                محبوب ترین قالب وردپرس جهان با بیش از یک میلیون کاربر فعال
              </div>
              <div className="text-2xl text-[#faeb58]">
                (همراه اپلیکیشن اندروید شرکتی فروشگاهی اختصاصی)
              </div>
              <div className="text-xs text-white">
                سریعترین، بهینه سازی، زیباترین، قدرتمندترین، اصولی ترین قالبی که
                مشاهده کرده اید.
              </div>
              <div className="mt-8">
                <Button className="bg-yellow-300 text-gray-800 rounded-3xl h-[25px] w-[150px] text-sm">
                  مشاهده دموها
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-end">
        <div className=" h-[230px] space-y-6 flex flex-col items-center text-justify ">
          <h2 className="text-3xl font-bold text-gray-800 ">
            بیش از 200 وب سایت آماده
          </h2>
          <p className="text-gray-600 text-lg w-[40%] place-content-center">
            همین حالا به بیش از ۲۰۰ وبسایت آماده شده اختصاصی ایرانی و دموهای
            پیش‌فرض فارسی قالب دسترسی خواهید داشت.
          </p>
        </div>
      </div>
    </div>
  )
}
export default PopularDemo
