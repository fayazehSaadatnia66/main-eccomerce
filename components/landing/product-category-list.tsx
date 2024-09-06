import WaveCard from "@/components/card/card-wave"
import {
  FaAngular,
  FaHtml5,
  FaJs,
  FaReact,
  FaShoppingCart,
  FaVuejs,
  FaWordpressSimple,
} from "react-icons/fa"
import { BiLogoTypescript } from "react-icons/bi"
import CardStaticColoredBorder from "../card/card-static-colored-border"
import CardRotaryColoredBorder from "../card/card-rotary-colored-border"
import CardInnerCircle from "../card/card-inner-circle"
import { Colors } from "@/types"
import Link from "next/link"
import ninePoint from "@/public/images/nine-point.png"
import Image from "next/image"
import "./product-category-list.scss"

const infoCards = [
  { color: "purple", icon: FaReact, title: "REACT" },
  { color: "red", icon: FaAngular, title: "انگولار" },
  { color: "yellow", icon: FaJs, title: "جاوا اسکریپت" },
  { color: "blue", icon: BiLogoTypescript, title: "TS" },
  { color: "green", icon: FaVuejs, title: "VUE" },
  { color: "orange", icon: FaHtml5, title: "HTML" },
  { color: "purple", icon: FaWordpressSimple , title: "WordPress" },
]
const ProductCategoryList = () => {
  return (
    <div className="flex flex-col gap-5">
      <div
      // className=""
      // style={{ backgroundImage: "url('/images/background1.jpg')" }}
      >
        <h4 className="flex justify-center items-end text-3xl tracking-tight font-bold">
          محصولات بر اساس دسته بندی
        </h4>
      </div>
      {/* <div className="flex w-full gap-5 justify-center">
        {infoCards.map((card) => (
          <CardStaticColoredBorder
            key={card.title}
            color={card.color as Colors}
            icon={card.icon}
            title={card.title}
            iconSize={55}
            width={140}
            wrapperClassName="bg-"
          />
          // <WaveCard color={card.color} icon={card.icon} title={card.title} />
        ))}
      </div> */}
      <div className="flex w-full gap-5 justify-center">
        {infoCards.map((card) => (
          <CardRotaryColoredBorder
            key={card.title}
            color={card.color as Colors}
            icon={card.icon}
            title={card.title}
            iconSize={55}
            width={140}
            // height={140}
            wrapperClassName="bg-"
          />
        ))}
        {/* <div className={`relative inline-block`}>
          <FaShoppingCart size={50} className={`text-blue-500`} />
          <div
            className={`absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center hover:bg-blue-500 hover:scale-110`}
          >
            5
          </div>
          <div className="flex items-center justify-center">
            <div className="show-all grid grid-cols-3 gap-2 ">
                <Image  src={ninePoint} alt="Picture of the author" width={100} height={100}/>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="flex mt-20 w-full gap-5 justify-center">
        {infoCards.map((card) => (
          <CardInnerCircle
            key={card.title}
            color={card.color as Colors}
            icon={card.icon}
            title={card.title}
          />
        ))}
      </div>

      <div className="flex mt-20 w-full gap-5 justify-center">
        {infoCards.map((card) => (
          <WaveCard
            key={card.title}
            color={card.color as Colors}
            icon={card.icon}
            title={card.title}
          />
        ))}
      </div> */}
    </div>
  )
}
export default ProductCategoryList
