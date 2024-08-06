
import CardWrapper from "@/components/auth/card-wrappper"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"


const ErrorCard = () => {
    return (
   <CardWrapper headerLabel="موارد اشتباهی وجود دارد" backButtonHref="/auth/login" backButtonLabel="بازگشت به صفحه ورود">
    <div className="w-full flex justify-center items-center">
    <ExclamationTriangleIcon className="text-destructive"/>
    </div>
   </CardWrapper>
    )
}    
export default ErrorCard