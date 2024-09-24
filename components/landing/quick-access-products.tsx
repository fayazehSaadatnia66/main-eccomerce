"use client"
import { Button } from "../ui/button"
import pro1 from "@/public/images/product1.jpg"
import pro2 from "@/public/images/product2.png"
import pro3 from "@/public/images/product3.jpg"
import pro4 from "@/public/images/product4.jpg"
import pro5 from "@/public/images/product5.jpg"
import pro6 from "@/public/images/product6.jpg"
import pro7 from "@/public/images/product7.jpg"
import pro8 from "@/public/images/product8.jpg"
import code1 from "@/public/images/code1.jpeg"
import code2 from "@/public/images/code2.jpeg"
import code3 from "@/public/images/code3.jpeg"
import code4 from "@/public/images/code4.jpeg"
import code5 from "@/public/images/code5.jpeg"
import code6 from "@/public/images/code6.jpeg"
import code7 from "@/public/images/code7.jpeg"
import ProductVertical from "../card/product-vertical"
import { useState } from "react"
import { cn } from "@/lib/utils"
enum CategoryProducts {
  store = "فروشگاهی",
  commercial = "تجاری",
  company = "شرکتی",
  landing = "لندینگ",
  private = "خصوصی",
  news = "خبری",
}
const categoryList = [
  CategoryProducts.store,
  CategoryProducts.commercial,
  CategoryProducts.company,
  CategoryProducts.landing,
  CategoryProducts.private,
  CategoryProducts.news,
]
const QuickAccessProducts = () => {
  const [activebtn, setActivebtn] = useState(CategoryProducts.company)

  const imagesSlider = [
    { item: code1, alt: "image1" },
    { item: code2, alt: "image2" },
    { item: code3, alt: "image3" },
    { item: code4, alt: "image4" },
    { item: code5, alt: "image5" },
    { item: code6, alt: "image6" },
    { item: code7, alt: "image7" },
    { item: pro1, alt: "image8" },
    { item: pro2, alt: "image9" },
    { item: pro3, alt: "image10" },
    { item: pro4, alt: "image11" },
    { item: pro5, alt: "image12" },
    { item: pro6, alt: "image13" },
    { item: pro7, alt: "image14" },
    { item: pro8, alt: "image15" },
  ]
  return (
    <div className="flex flex-col text-center justify-center self-center gap-10">
      <div className="flex flex-col w-[600px] gap-5 self-center">
        <div className="text-2xl">دسترسی سریع به قالب ها و افزونه ها</div>
        <div className="text-base text-gray-700">
          تنوع قالب های وب سایت، شما را سردرگم کرده است؟ با استفاده از فیلترهای
          دسته بندی، به سرعت قالب موردنظر خود را بیابید. چه به دنبال قالب
          مینیمال باشید یا قالب پویا، ما برای هر سلیقه ای گزینه مناسب داریم.
        </div>
      </div>
      <div className="flex flex-col w-[80%] self-center gap-5">
        <div className="flex flex-row w-[80%] self-center">
          {categoryList.map((cat: CategoryProducts) => {
            return (
              <Button
                onClick={() => setActivebtn(cat)}
                className={cn(
                  "w-[150px]",
                  activebtn === cat
                    ? "bg-[#6fd06f] text-black hover:bg-gray-200" 
                    : "bg-gray-300 text-gray-700 hover:bg-gray-200" 
                )}
              >
                {cat}
              </Button>
            )
          })}
        </div>
        <div className="flex flex-wrap  place-content-center">
          {imagesSlider.map((item, index) => (
            <div key={index} className=" p-2 h-80 flex-1 w-[280px]">
              <ProductVertical
                index={index}
                className="rounded-2xl overflow-hidden w-[250px]"
                productName="قالب فروشگاهی ایکس پرو"
                application="قالب شرکتی"
                numberSales="229"
                score={4.7}
                price={610000}
                img={item}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button className="text-gray-600 bg-white border border-gray-300 rounded-2xl  hover:bg-gray-200">
          مشاهده همه
        </Button>
      </div>
    </div>
  )
}
export default QuickAccessProducts
