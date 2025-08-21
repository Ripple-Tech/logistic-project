"use client"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"
import { NavbarSidebar } from "./Navbar-sidebar"
import { useState } from "react"
import { MenuIcon } from "lucide-react"

const poppins = Poppins({
    weight: ["700"],
    subsets: ["latin"],
    variable: "--font-poppins",
})
interface NavbarItemProps {   
    href: string
    children: React.ReactNode
    isActive?: boolean
}
const NavbarItems = [
    { children: "Home", href: "/" },
    { children: "About", href: "/about-us" },
    { children: "Contact", href: "/contact" },
     { children: "Create Shipment", href: "/create-shipment" },
]

const NavbarItem = ({href, children, isActive}: NavbarItemProps) => {
    return (
        <Button asChild variant="outline" className={cn("text-lg px-3.5 bg-transparent hover:bg-[#ff7011] rounded-full hover:border-primary border-transparent font-semibold text-gray-800 hover:text-gray-600",
         isActive && "text-white bg-[#ff7011] hover:bg-[#000] hover:text-white")}>
          <Link href={href}>
           {children}
          </Link>
        </Button>
    )
}

export const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <nav className="flex h-20 border-b justify-between px-4 bg-white">
         <Link href={"/"} className="pl-6 flex items-center">
          <span className={cn("text-5xl font-bold", poppins.className, "text-black")}>
            DHLD</span>
         </Link>

         <NavbarSidebar items={NavbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
         <div className=" items-center hidden gap-4 pr-6 lg:flex">
            {NavbarItems.map((item) => (
                <NavbarItem 
                   key={item.href}
                   href={item.href}
                   isActive={pathname === item.href}
                       >
                    {item.children}
                </NavbarItem>
        ))}
        </div>
        <div className="hidden lg:flex ">
         <Button asChild variant="secondary" className="text-lg px-12 h-full border-l border-t-0 border-r-0 bg-transparent hover:bg-[#ff7011] transition-colors rounded-none  font-semibold text-gray-800 hover:text-black"> 
         <Link href="/auth/login"> Log in </Link>
         </Button>
         <Button asChild className="text-lg px-12 h-full border-l border-t-0 border-r-0 bg-[#ff7011] hover:bg-[#000] transition-colors rounded-none  font-semibold text-black hover:text-gray-800"> 
         <Link href="/auth/register">Start sending </Link>
         </Button>
        </div>
        <div className="flex lg:hidden items-center justify-center">
  <button
    onClick={() => setIsSidebarOpen(true)}
    className="p-1 border border-gray-300 rounded-md bg-transparent hover:bg-gray-100"
  >
    <MenuIcon color="black" className="w-8 h-8" />
  </button>
</div>

        </nav>
    ) 
}