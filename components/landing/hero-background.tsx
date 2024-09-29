import Image from "next/image"
// import img from "/public/images/hero2.jpg"
// import img from "/public/images/hero3.png"
// import img from "/public/images/hero5.svg"
// import img from "/public/images/hero6.svg"
import "./hero-background.scss"

export function HeroBackground() {
  return (
    <>
      <div className="hero-banner absolute top-0 right-0 left-0 mx-auto h-[500px]">
        <div className="wave_section">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          > 
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="parallax">
              {/* <path
              fill="rgba(255,255,255,0.8)"
              d="M-90 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
            <path
              fill="rgba(255,255,255,0.8)"
              d="M-120 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path> */}
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              ></use>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              ></use>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              ></use>
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"></use>
              {/* <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f6f4fe"></use> */}
            </g>
          </svg>
        </div>
      </div>
      {/* <Image
        className="wave-clip absolute top-0 right-0 left-0 mx-auto"
        alt="Mountains"
        src={img}
        // placeholder="blur"
        // quality={100}
        // fill
        // sizes="100vw"
        // width={100}
        // height={120}
        style={{
          objectFit: "cover",
          // objectPosition: "100px 200px"
          height: 450
        }}
      /> */}
    </>
  )
}
