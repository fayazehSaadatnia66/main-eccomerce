import WaveCard from "@/components/card/wave-card"
import { FaAngular, FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa"
import CustomIcon from "./customIcon"
const CategorySlider = () => {
  return (
    <div >
      <div
        className="mb-5"
        // style={{ backgroundImage: "url('/images/background1.jpg')" }}
      >
        <h4 className="flex justify-center scroll-m-20 text-3xl tracking-tight font-bold">
          محصولات بر اساس دسته بندی
        </h4>
      </div>
      {/* <div className="flex justify-center mb-5">
        <CustomIcon />
      </div> */}

      <div className="flex w-full gap-5 justify-center">
        <WaveCard  color="purple" icon={FaReact} title="REACT" />
        <WaveCard color="red" icon={FaAngular} title="انگولار" />
        <WaveCard color="yellow" icon={FaJs} title="جاوا اسکریپت" />
        <WaveCard color="blue" icon={FaReact} title="TS" />
        <WaveCard color="green" icon={FaVuejs} title="VUE" />
        <WaveCard color="orange" icon={FaHtml5} title="HTML" />
      </div>
    </div>
  )
}
export default CategorySlider
