// "use client"
// import { useState } from "react"
// import "./three-style.scss"

// import Image, { StaticImageData } from "next/image"
// import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
// type ThreeCarouselProps = {
//   images: {
//     item: StaticImageData
//     alt: string
//   }[]
// }
// const ThreeCarousel = ({ images }: ThreeCarouselProps) => {
//   const [rotation, setRotation] = useState(0)
//   const [isDragging, setIsDragging] = useState(false)
//   const [startX, setStartX] = useState(0)
//   const [currentRotation, setCurrentRotation] = useState(0)

//   const handlePrevClick = () => {
//     console.log("prev")

//     setRotation((prevRotation) => prevRotation - 120)
//   }

//   const handleNextClick = () => {
//     console.log("next")
//     setRotation((prevRotation) => prevRotation + 120)
//   }
//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true)
//     setStartX(e.clientX)
//     setCurrentRotation(rotation)
//   }

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (isDragging) {
//       const moveX = e.clientX - startX
//       const rotationChange = moveX / 2 // تنظیم حساسیت حرکت ماوس
//       setRotation(currentRotation + rotationChange)
//     }
//   }

//   const handleMouseUp = () => {
//     setIsDragging(false)
//     // چرخش کاروسل به نزدیکترین 120 درجه
//     const remainder = rotation % 120
//     const snapRotation = remainder > 60 ? 120 - remainder : -remainder
//     setRotation(rotation + snapRotation)
//   }
//   return (
//     <div
//       className="carousel-container grid gap-4 grid-cols-3 "
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseUp}
//       style={{ position: "relative", width: "190px", height: "210px" }}
//     >
//       <button
//         className=""
//         // style={{ position: "relative", right: 60 }}
//         style={{ position: "relative", top: "50%", left: "60px", transform: "translateY(-50%)" }}

//         onClick={handleNextClick}
//       >
//         <MdArrowForwardIos size={22} className="text-gray-400" />
//       </button>
//       <div
//         className="carousel"
//         style={{
//           position: "relative",
//           width: "190px",
//           height: "210px",
//           perspective: "800px",
//         }}
//       >
//         <div
//           className="carousel-content "
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             transformStyle: "preserve-3d",
//             transform: `translateZ(-182px) rotateY(${rotation}deg)`,
//             transition: isDragging ? "none" : "transform 0.8s cubic-bezier(1, 0.015, 0.295, 1.225)",
//           }}
//         >
//           {images.map((img: any, index: number) => {
//             return (
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "190px",
//                   height: "210px",
//                   borderRadius: "6px",
//                   background: `url(${img.src}) no-repeat center/cover`,
//                   transform: `rotateY(${index * 120}deg) translateZ(182px)`,
//                 }}
//                 key={index}
//                 className="carousel-item"
//               >
//                 <Image
//                   className="w-full h-full"
//                   width={500}
//                   height={900}
//                   style={{borderRadius:"6px"}}
//                   src={img.item.src}
//                   alt={img.alt}
//                 />
//               </div>
//             )
//           })}
//         </div>
//       </div>
//       <button
//         className=""
//         // style={{ position: "relative", right: 100, fontSize: 500 }}
//         style={{ position: "absolute", top: "50%", right: "350px", transform: "translateY(-50%)" }}

//         onClick={handlePrevClick}
//       >
//         <MdArrowBackIos size={22} className=" text-gray-400 text-lg" />
//       </button>
//     </div>
//   )
// }

// export default ThreeCarousel
