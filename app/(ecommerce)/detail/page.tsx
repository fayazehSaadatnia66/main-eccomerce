"use client"
import React from "react"
import popular from "@/public/images/popular.jpg"
import { RxShare1 } from "react-icons/rx"
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

const detail = () => {
  return (
    <div className="container">
      <Breadcrumb>
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
      <div className="flex gap-x-12 bg-slate-600">
        <div className="bg-red-300 basis-11/12">
          <Image
            src={popular}
            alt="popular"
            className="rounded-lg"
            width={3000}
          />
          <div className="flex w-44 gap-3 mt-5">
            <Button className="bg-purple-800">پیش‌نمایش</Button>
            <Button className="bg-gray-400">
              <RxShare1 />
            </Button>
          </div>
        </div>
        <div className="bg-yellow-300 basis-4/12">
          <Card className="p-4">
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
            <Button className="border-purple-800 w-full drop-shadow-xl h-11" variant="outline">
              <h4 className="text-purple-800 scroll-m-20 text-lg font-semibold tracking-tigh">افزودن به سبد خرید</h4>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default detail
