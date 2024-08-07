import { CheckCircledIcon } from "@radix-ui/react-icons"
interface FormErrorProps {
  message?: string
}

export const FormSuccess = ({ message }: FormErrorProps) => {
  if (!message) return null
  return (
    <div className="place-content-center bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <p className="text-center ">{message}</p>
      <CheckCircledIcon className="h-4 w-4" />
    </div>
  )
}
