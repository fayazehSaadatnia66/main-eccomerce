import WaveCard from "@/components/card/wave-card"
import { FaAngular, FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa"
const infoCards = [
  { color: "purple", icon: FaReact, title: "REACT" },
  { color: "red", icon: FaAngular, title: "انگولار" },
  { color: "yellow", icon: FaJs, title: "جاوا اسکریپت" },
  { color: "blue", icon: FaReact, title: "TS" },
  { color: "green", icon: FaVuejs, title: "VUE" },
  { color: "orange", icon: FaHtml5, title: "HTML" },
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
          <WaveCard color={card.color} icon={card.icon} title={card.title} />
        ))}
      </div>
    </div>
  )
}
export default ProductCategoryList
