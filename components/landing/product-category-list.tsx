import WaveCard from "@/components/card/card-wave"
import { FaAngular, FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa"
import { BiLogoTypescript } from "react-icons/bi"
import CardStaticColoredBorder from "../card/card-static-colored-border"
import CardRotaryColoredBorder from "../card/card-rotary-colored-border"
import CardInnerCircle from "../card/card-inner-circle"
import { Colors } from "@/types"
const infoCards = [
  { color: "purple", icon: FaReact, title: "REACT" },
  { color: "red", icon: FaAngular, title: "انگولار" },
  { color: "yellow", icon: FaJs, title: "جاوا اسکریپت" },
  { color: "blue", icon: BiLogoTypescript, title: "TS" },
  { color: "green", icon: FaVuejs, title: "VUE" },
  { color: "orange", icon: FaHtml5, title: "HTML" }
]
const ProductCategoryList = () => {
  return (
    <div>
      <div
        className="mb-5"
        // style={{ backgroundImage: "url('/images/background1.jpg')" }}
      >
        <h4 className="flex justify-center scroll-m-20 text-3xl tracking-tight font-bold">
          محصولات بر اساس دسته بندی
        </h4>
      </div>
      <div className="flex w-full gap-5 justify-center">
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
      </div>
      <div className="flex mt-20 w-full gap-5 justify-center">
        {infoCards.map((card) => (
          <CardRotaryColoredBorder
            key={card.title}
            color={card.color as Colors}
            icon={card.icon}
            title={card.title}
          />
        ))}
      </div>
      <div className="flex mt-20 w-full gap-5 justify-center">
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
      </div>
    </div>
  )
}
export default ProductCategoryList
