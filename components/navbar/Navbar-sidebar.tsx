import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCurrentUser } from "@/lib/use-current-user"
import { LucidePanelLeftClose } from "lucide-react"
import { LogoutButton } from "@/components/auth/logout-button"
import Image from "next/image"
interface NavbarItem {
    href: string
    children: React.ReactNode
}
interface Props {   
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export const NavbarSidebar = ({items, open, onOpenChange}: Props) => {
   const user = useCurrentUser();
  const pathname = usePathname()
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 border-b">
        <SheetHeader className="p-4 bg-gray-100 border-b">
          
         <SheetTitle className="text-lg font-semibold"> 
              <Link href={"/"} className="pl-6 flex gap-8 items-center">
                          <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={34}
                            height={34}
                            className="max-sm: size-14"
                          />
             
                       <span className="text-2xl  md:text-5xl font-bold text-[#ff7011]">
                         DHLD</span>
                      </Link>
            </SheetTitle>
          
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
            {items.map((item) => {
              const isActive = pathname === item.href
            return (
              <Link key={item.href} 
                href={item.href} 
                className={cn(
                  "w-full text-left p-4 flex items-center font-medium text-base transition-colors",
                  isActive
                    ? "bg-[#324F3B] text-white"
                    : "text-gray-800 hover:bg-[#324F3B] hover:text-white"
                )}
                 onClick={() => onOpenChange(false)}>
                {item.children}
              </Link> )
           } )}

          {user ? (   
         <div onClick={() => onOpenChange(false)} className=" p-4">
           <LogoutButton>    
                 <LucidePanelLeftClose className="h-6 w-6 mr-2"/>  Logout
            </LogoutButton>
            </div>
              )   : (
               <div className="border-t">
              <Link href="/auth/login" onClick={() => onOpenChange(false)} className="w-full text-left p-4 flex items-center font-medium text-gray-800 hover:bg-[#ff7011] hover:text-white text-base">
              Log In</Link>
              <Link href="/auth/register" className="w-full text-left p-4 flex items-center font-medium text-gray-800 hover:bg-[#ff7011] hover:text-white text-base">
               Sign Up</Link>
            </div>
          ) } 

        </ScrollArea> 
        </SheetContent> 
    </Sheet>
  )
}



