import { LinearBanner } from "@/components/banner/linear-banner"
import { MultipleCardsBanner } from "@/components/banner/multiple-card-banner"
import accountabilityProduct from "@/public/images/accountability.jpeg"
import phpProduct from "@/public/images/php.png"
import programProduct from "@/public/images/Programming.jpeg"
import code1 from "@/public/images/code1.jpeg"
import code2 from "@/public/images/code2.jpeg"
import code3 from "@/public/images/code3.jpeg"
import code4 from "@/public/images/code4.jpeg"
import code5 from "@/public/images/code5.jpeg"
import code6 from "@/public/images/code6.jpeg"
import code7 from "@/public/images/code7.jpeg"
import StackSlider from "@/components/sliders/stack-slider"
import star from "@/public/images/best-seller-star.svg"
import LinearSlider from "@/components/sliders/linear-slider"
import ProductCategoryList from "@/components/landing/product-category-list"

const imagesSlider = [
  { item: code1, alt: "image1" },
  { item: code2, alt: "image2" },
  { item: code3, alt: "image3" },
  { item: code4, alt: "image4" },
  { item: code5, alt: "image5" },
  { item: code6, alt: "image6" },
  { item: code7, alt: "image7" },
]
const item = {
  top: { src: accountabilityProduct, alt: "عکس بالا" },
  bottom: { src: phpProduct, alt: "عکس پایین" },
  left: { src: programProduct, alt: "عکس چپ" },
}
const pages = [
  <div className="p-4 bg-blue-100">صفحه 1</div>,
  <div className="p-4 bg-green-100">صفحه 2</div>,
  <div className="p-4 bg-red-100">صفحه 3</div>,
]
const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-10 py-4 justify-center">
      <ProductCategoryList />
      <LinearSlider
        items={imagesSlider}
        nameLinearSlider={"پرفروش ترین‌های سایت"}
        logoLinearSlider={{item:star, alt:"star"}}
      />
      <LinearBanner wrapperClassNames="py-3" text="شگفت انگیزترین قالب ها" />
      <StackSlider items={imagesSlider} />
      <MultipleCardsBanner
        items={[
          {
            src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/f7f82d26ebd20279437a09594726ded3a112cf97_1722759656.gif?x-oss-process=image?x-oss-process=image/format,webp",
            alt: "react",
          },
          {
            src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/1d37766bef252af69b1682d889b2df7823870097_1722434664.jpg?x-oss-process=image/quality,q_95/format,webp",
            alt: "xxx",
          },
        ]}
      />
    </div>
  )
}
export default HomePage
