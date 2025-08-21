"use client"
//import { sidebarLinks } from '@/constants';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'

export const sidebarLinks = [
    {
      imgURL: "/home.svg",
      route: "/dashboard",
      label: "Home",
    },
    {
      imgURL: "/blog.svg",
      route: "/cart",
      label: "Cart",
    },
    {
      imgURL: "/blog.svg",
      route: "/orders",
      label: "Orders",
    },
    {
      imgURL: "/community.svg",
      route: "/users",
      label: "Admins",
    },
   
  ];

function TopBar(){
    const router = useRouter();
   const pathname = usePathname();
   if (pathname === null) {
    // Handle the case where pathname is null, e.g., show a loading spinner or redirect
    return null;
  }
    return (
        <section className='bottombar bg-gray-100'>
          <div className='bottombar_container'>
           {sidebarLinks.map((link: any) => {
             const isActive = (pathname.includes(link.route) && link.route.length > 1)
             || pathname === link.route;
             
              return (
                <Link 
                 href={link.route}
                 key={link.label}
                 className={`bottombar_link ${isActive && 'bg-[#ff7011]'}`}
                 >
                  <Image 
                  src={link.imgURL}
                  alt={link.label}
                  width={22}
                  height={22}
                 />
                 <p className='text-[11.4px] text-secondary'>
                  {link.label.split(/\s+./)[0]}
                 </p>
                </Link>
                 
           ) 
           })}
          </div>
        </section>
    )
}

export default TopBar;