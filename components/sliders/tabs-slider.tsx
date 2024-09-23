"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import LinearSlider from "./linear-slider"
import code1 from "@/public/images/code1.jpeg"
import code2 from "@/public/images/code2.jpeg"
import code3 from "@/public/images/code3.jpeg"
import pro1 from "@/public/images/product1.jpg"
import pro2 from "@/public/images/product2.png"
import pro3 from "@/public/images/product3.jpg"
import { Card } from "../ui/card"
import "./tabs-slider.scss"
// import star from "@/public/images/"

const TabSlider = () => {
  const vueProducts = [
    { item: code1, alt: "image1" },
    { item: code2, alt: "image2" },
    { item: code3, alt: "image3" },
  ]
  const reactProducts = [
    { item: pro1, alt: "image1" },
    { item: pro2, alt: "image2" },
    { item: pro3, alt: "image3" },
  ]
  const angolarProducts = [
    { item: code1, alt: "image1" },
    { item: code2, alt: "image2" },
    { item: code3, alt: "image3" },
  ]
  return (
    // <div className="w-full flex place-content-center">
    <Tabs
      defaultValue="vue"
      className=" w-[1500px] text-center tabs-slider self-center bg-none"
      dir="rtl"
    >
      <TabsList className="ggggggggggggggggggggggggggggggg flex w-full justify-center tabs-list ">
        <TabsTrigger
          value="vue"
          className="basis-1/4 h-10 px-0  hover:bg-purple-200 data-[state=active]:bg-purple-700 rounded-b-0 overflow-hidden data-[state=active]:text-white  "
        >
          ویو
        </TabsTrigger>
        <TabsTrigger
          value="react"
          className="basis-1/4 h-10 -10  hover:bg-purple-200 data-[state=active]:bg-purple-700 rounded-b-0 data-[state=active]:text-white  "
        >
          ری اکت
        </TabsTrigger>
        <TabsTrigger
          value="angolar"
          className="basis-1/4 h-10 -10 hover:bg-purple-200 data-[state=active]:bg-purple-700 rounded-b-0 data-[state=active]:text-white  "
        >
          انگولار
        </TabsTrigger>
      </TabsList>
      <div className="tabs-content flex-row text-center ">
        <TabsContent value="vue" className="data-[state=active]:mt-0 ">
          <LinearSlider
            slidePreView={vueProducts.length}
            className="px-10 w-[20%] !important"
            items={vueProducts}
            name="قالب های اختصاصی"
            bgClassName={"bg-purple-700"}
            // logo={{ item: star, alt: "star" }}
          />
          {/* <div className="bg-white shadow-md rounded-lg p-4">
                    <img
                      src={card.image}
                      alt={card.title}  
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h2 className="text-lg font-semibold mt-4">{card.title}</h2>
                    <p className="text-gray-500 mt-2">{card.description}</p>
                    <div className="text-purple-700 font-bold mt-4">
                      {card.price}
                    </div>
                  </div> */}
        </TabsContent>
        <TabsContent value="react" className="data-[state=active]:mt-0">
          <LinearSlider
            className="px-10 w-[20%] !important"
            slidePreView={reactProducts.length}
            items={reactProducts}
            name="قالب های اختصاصی"
            bgClassName={"bg-purple-700"}
            // logo={{ item: star, alt: "star" }}
          />
          {/* <div className="bg-white shadow-md rounded-lg p-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h2 className="text-lg font-semibold mt-4">{card.title}</h2>
                    <p className="text-gray-500 mt-2">{card.description}</p>
                    <div className="text-purple-700 font-bold mt-4">
                      {card.price}
                    </div>
                  </div> */}
        </TabsContent>
        <TabsContent value="angolar" className="data-[state=active]:mt-0">
          <LinearSlider
            className="px-10 w-[20%] !important"
            slidePreView={angolarProducts.length}
            items={angolarProducts}
            name="قالب های اختصاصی"
            bgClassName={"bg-purple-700"}
            // logo={{ item: star, alt: "star" }}
          />
          {/* <div className="bg-white shadow-md rounded-lg p-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h2 className="text-lg font-semibold mt-4">{card.title}</h2>
                    <p className="text-gray-500 mt-2">{card.description}</p>
                    <div className="text-purple-700 font-bold mt-4">
                      {card.price}
                    </div>
                  </div> */}
        </TabsContent>
      </div>
    </Tabs>
    // </div>
  )
}
export default TabSlider
