"use client"
import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"

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
      <hr className="my-3" />
      <div className="flex bg-slate-600">
        <div className="flex-none w-">sss</div>
        <div className="flex-initial">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          accusamus voluptatum explicabo iure error quo, soluta ex, nostrum
          itaque corporis praesentium est et ea fugit, distinctio
          reprehenderit nulla impedit quia.
        </div>
      </div>
    </div>
  )
}

export default detail
