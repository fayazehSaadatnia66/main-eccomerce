import { LinearSlider } from "@/components/sliders/linear-slider"
import brain from "@/public/images/brain.jpeg"
import script from "@/public/images/script.png"
import themeHtml from "@/public/images/theme html.png"
import world from "@/public/images/wrold.png"
import CircleItems from "@/components/sliders/circle-items"
import accountabilityProduct from "@/public/images/accountability.jpeg"
import phpProduct from "@/public/images/php.png"
import programProduct from "@/public/images/Programming.jpeg"
import { TripleBanner } from "@/components/sliders/triple-banner"

const icons = [
  { name: "هوش مصنوعی", icon: brain },
  { name: "اسکریپت", icon: script },
  { name: "قالب Html", icon: themeHtml },
  { name: "قالب", icon: world },
]
const item = {
  top: { src: accountabilityProduct, alt: "عکس بالا" },
  bottom: { src: phpProduct, alt: "عکس پایین" },
  left: { src: programProduct, alt: "عکس چپ" },
}
const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-5 py-4 justify-center">
      <TripleBanner item={item}/>
      <CircleItems icons={icons} />
      <LinearSlider />
    </div>
  )
}
export default HomePage
