import { CheckCircledIcon } from "@radix-ui/react-icons"
interface FormWarningProps {
  message?: string
}

export const FormWarning = ({ message }: FormWarningProps) => {
  if (!message) return null
  return (
    <div className="place-content-center bg-yellow-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-yellow-500">
      <CheckCircledIcon className="h-4 w-4" />
      <p className="text-center ">{message}</p>
    </div>
  )
}
