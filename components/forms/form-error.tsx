import  AlertTriangle  from "@/assets/social-x.svg"
import Image from "next/image";
interface FormErrorProps {
   message?: string; 
}

export const FormError = ({message}: FormErrorProps) => {
if (!message) return null;

return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-4 text-sm text-destructive">
      <Image src={AlertTriangle} alt="Success Icon" width={16} height={16} />
      <p>{message}</p>
    </div>
)
}