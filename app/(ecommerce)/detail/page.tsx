"use client"
import React from "react"
import popular from "@/public/images/popular.jpg"
import pic1 from "@/public/images/pic1.jpg"
import pic2 from "@/public/images/pic2.jpg"
import { RxShare1 } from "react-icons/rx"
import { RxDashboard } from "react-icons/rx"
import { RxLayers } from "react-icons/rx"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ParallaxSlider from "@/components/slider-parallax/slider-parallax"
import "./style.scss"

const detail = () => {
  return (
    <div>
      <Breadcrumb className="mt-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-base">
              صفحه اصلی
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-base">
              قالب ری‌اکت
            </BreadcrumbLink>
            <p className="text-sm text-muted- underline underline-offset-4 text-gray-300">
              6,584
            </p>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-base">
              قالب فروشگاهی
            </BreadcrumbLink>
            <p className="text-sm text-muted- underline underline-offset-4 text-gray-300">
              257
            </p>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-base">
              قالب چند منظوره پروفشنت
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <hr className="my-8" />
      <p className="mb-4 scroll-m-20 text-4xl tracking-tight">
        قالب شخصی و نمونه کار توپیگو
      </p>
      <div className="flex justify-between">
        <div className=" w-2/3 me-9">
          <Image
            src={popular}
            alt="popular"
            className="rounded-lg"
            width={3000}
          />
          <div className="flex w-44 gap-3 mt-5">
            <Button className="bg-purple-800 h-11 w-60">
              <RxDashboard className="me-2" size={20} />
              <p>پیش‌نمایش</p>
            </Button>
            <Button className="bg-gray-400 h-11">
              <RxShare1 size={20} />
            </Button>
          </div>
          <h4 className="mt-10 mb-3 scroll-m-20 text-3xl tracking-tight">
            معرفی قالب
          </h4>
          <hr className="customHr" />
          <p className="leading-9 text-justify">
            اگر به دنبال راه اندازی یک سایت در زمینه ارز دیجیتال هستید قالب
            رمزینه مناسب شماست. این قالب دارای امکاناتی مانند نمودار قیمتی
            رمزارزها و نمایش نمودار کریپتو، مبدل قیمت ارزها به یکدیگر،
            پشتیبانی بیش از 150 رمز ارز، بیش از 20 المان المنتوری، پنل
            تنظیمات پیشرفته، مگامنو اختصاصی و حرفه‌ای، صفحه ورود و عضویت
            اختصاصی است. این قالب مناسب کسانی است که که می‌خواهند یک
            وب‌سایت حوزه رمزارزها ایجاد کنند. قالب رمزینه یک محصول ایرانی
            است و طبق نیاز و کاربران ایران طراحی شده است.
          </p>
          <Image
            src={pic1}
            alt="pic1"
            className="rounded-lg mb-4"
            width={3000}
          />
          <Image
            src={pic2}
            alt="pic1"
            className="rounded-lg"
            width={3000}
          />
          <p className="mt-10 mb-3 scroll-m-20 text-3xl tracking-tight">
            امکانات قالب
          </p>
          <hr className="customHr" />
          <p className="leading-9 text-justify">
            این قالب سایت با بهره گیری از طراحی روز در کنار تنظیمات پیشرفته
            طراحی شده است و انواع طرح‌بندی برای وبلاگ و نمونه کارها را
            ارائه میکند، همچنین دارای فونت های حرفه ای از جمله لایسنس مخصوص
            فونت حرفه ای دانا است که درصورت خرید میتوانید از این فونت بصورت
            رایگان در پروژه استفاده کنید.(کد لایسنس :DZM7QS58) سازگاری با
            ووکامرس و صفحات اختصاصی و جذاب فروشگاهی قالب توپیگو کاملا بهینه
            شده و سازگار با ووکامرس است، همچنین صفحات اختصاصی با طراحی
            منحصر به فرد مثل صفحه سبد خرید، حساب کاربری، فروشگاه و… برای
            این پوسته در نظر گرفته شده است.
          </p>
          <p className="mt-10 mb-3 scroll-m-20 text-3xl tracking-tight">
            ویژگی های پوسته توپیگو
          </p>
          <p className="mb-3">
            سایر ویژگی‌های این قالب شخصی وردپرس که دو تم رنگی پیشفرض دارد،
            عبارتند از:
          </p>
          <ul className="list-disc list-inside leading-9 text-justify ms-2">
            <li>سازگار با افزونه WPML برای دوزبانه کردن سایت</li>
            <li>بیش از 33 ویجت المنتور اختصاصی</li>
            <li>سارگار با افزونه فرم تماس 7 و فلامینگو</li>
            <li>بیش از 4 دمو خانه</li>
            <li>دو حالت تیره و روشن</li>
          </ul>
          <div className="flex gap-4 items-center mt-10 mb-3">
            <RxLayers size={25} />
            <p className="scroll-m-20 text-3xl tracking-tight">
              محصولات دیگر
            </p>
          </div>
          <div className="mb-64 w-3/3">
            <ParallaxSlider />
          </div>
        </div>
        <div className="w-1/3">
          <Card className="p-4 sticky top-12">
            <CardContent className="space-y-5">
              <div className="flex justify-between">
                <p>ورژن</p>
                <p>1.5.6</p>
              </div>
              <div className="flex justify-between">
                <p>اخرین بروزرسانی</p>
                <p>5 روز قبل</p>
              </div>
              <div className="flex justify-between">
                <p>تاریخ انتشار</p>
                <p>01 آذر 1402</p>
              </div>
              <div className="flex justify-between">
                <p>دسته‌بندی</p>
                <p>ری‌اکت</p>
              </div>
              <div className="flex justify-between">
                <p>موضوع</p>
                <p>قالب چند منظوره</p>
              </div>
              <div className="flex justify-between">
                <p>تگ‌ها</p>
                <p>Bootstrap, one page Responsive, spa</p>
              </div>
            </CardContent>
            <hr className="mb-5" style={{ border: "1px dashed" }} />
            <CardFooter className="flex justify-between">
              <h5 className="scroll-m-20 text-xl font-semibold tracking-tight">
                قیمت محصول:
              </h5>
              <h5 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-500">
                799,000 تومان
              </h5>
            </CardFooter>
            <Button
              className="border-purple-800 w-full drop-shadow-xl h-11"
              variant="outline"
            >
              <h4 className="text-purple-800 scroll-m-20 text-lg font-semibold tracking-tigh">
                افزودن به سبد خرید
              </h4>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default detail
