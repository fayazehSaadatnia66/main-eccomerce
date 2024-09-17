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
      <div className="flex gap-4 bg-slate-600">
        <div className="bg-red-300 basis-8/12">
          <Image src={popular} alt="popular" className="rounded-lg" />
          <div className="flex w-44 gap-3 mt-5">
            <Button className="bg-purple-800">افزودن به سبد خرید</Button>
            <Button className="bg-gray-400">
              <RxShare1 />
            </Button>
          </div>
        </div>
        <div className="bg-yellow-300 basis-5/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          accusamus voluptatum explicabo iure error quo, soluta ex, nostrum
        </div>
      </div>
    </div>
  )
}

export default detail
