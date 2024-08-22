import { LinearBanner } from "@/components/banner/linear-banner"
import { MultipleCardsBanner } from "@/components/banner/multiple-card-banner"
import { LinearSlider } from "@/components/sliders/linear-slider"
import { TripleBanner } from "@/components/sliders/triple-banner"
import CircleItems from "@/components/sliders/circle-items"
import brain from "@/public/images/brain.jpeg"
import script from "@/public/images/script.png"
import themeHtml from "@/public/images/theme html.png"
import world from "@/public/images/wrold.png"
import accountabilityProduct from "@/public/images/accountability.jpeg"
import phpProduct from "@/public/images/php.png"
import programProduct from "@/public/images/Programming.jpeg"
import ThreeCarousel from "@/components/sliders/three-slider"
import code1 from "@/public/images/code1.jpeg"
import code2 from "@/public/images/code2.jpeg"
import code3 from "@/public/images/code3.jpeg"
import StackSlider from "@/components/sliders/stack-slider"

const icons = [
  { name: "هوش مصنوعی", icon: brain },
  { name: "اسکریپت", icon: script },
  { name: "قالب Html", icon: themeHtml },
  { name: "قالب", icon: world }
]
const images = [
  { item: code1, alt: "image1" },
  { item: code2, alt: "image2" },
  { item: code3, alt: "image3" }
]
const item = {
  top: { src: accountabilityProduct, alt: "عکس بالا" },
  bottom: { src: phpProduct, alt: "عکس پایین" },
  left: { src: programProduct, alt: "عکس چپ" }
}
const pages = [
  <div className="p-4 bg-blue-100">صفحه 1</div>,
  <div className="p-4 bg-green-100">صفحه 2</div>,
  <div className="p-4 bg-red-100">صفحه 3</div>
]
const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-5 py-4 justify-center">
      <TripleBanner item={item} />
      <div className="flex items-center justify-center">
        <ThreeCarousel images={images} />
      </div>
      {/* <TripleSlider /> */}

      <StackSlider />
      <CircleItems icons={icons} />
      <LinearSlider bgClassName="bg-primary" />
      <LinearBanner
        wrapperClassNames="py-3"
        text="جدیدترین خدمات  پردازش تصویر"
      />
      <MultipleCardsBanner
        items={[
          {
            src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/f7f82d26ebd20279437a09594726ded3a112cf97_1722759656.gif?x-oss-process=image?x-oss-process=image/format,webp",
            alt: "react"
          },
          {
            src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/1d37766bef252af69b1682d889b2df7823870097_1722434664.jpg?x-oss-process=image/quality,q_95/format,webp",
            alt: "xxx"
          }
        ]}
      />
      <LinearSlider bgClassName="bg-primary2" />
      <LinearSlider bgClassName=" bg-cyan-600" />
    </div>
  )
}
export default HomePage
