import { LinearBanner } from "@/components/banner/linear-banner"
import { MultipleCardsBanner } from "@/components/banner/multiple-card-banner"
import { LinearSlider } from "@/components/sliders/linear-slider"
import jsLib from "/public/images/js-libs.png"

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-5 py-4 justify-center">
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
