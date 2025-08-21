

import Image from "next/image";
import CheckCircle from "@/assets/blog.svg";
interface FormSuccessProps {
  message?: string; 
}
export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-4 text-sm text-emerald-500">
      <Image src={CheckCircle} alt="Success Icon" width={16} height={16} />
      <p>{message}</p>
    </div>
  );
};