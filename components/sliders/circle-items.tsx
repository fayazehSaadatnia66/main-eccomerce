import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const CircleItems = ({icons}:any) => {
  return (
    <div className="flex flex-col">
      <h4 className="flex justify-center scroll-m-20 text-xl tracking-tight mb-5">
        محصولات بر اساس دسته بندی
      </h4>
      <div className="flex  justify-center flex-row gap-10 mb-5">
        {icons.map((obj:any) => {
          return (
            <div className="flex flex-col items-center	">
              <Avatar>
                <AvatarImage
                  width={150}
                  src={obj.icon.src as any}
                  alt="@shadcn"
                />
              </Avatar>
              <h5 className="text-sm">{obj.name}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default CircleItems
