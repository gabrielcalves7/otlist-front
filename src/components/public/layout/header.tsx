"use client"
import '@/styles/global.css'
import { httpRequest } from "@/services/api";
import React, { useEffect } from "react";
import MenuItem from "@/components/menu/item";

export default function Header() {

  const Menu = [
    "Home",
    "OTServlist",
    "Contact Us",
    "Search",
    "Download",
    "Forum",
    "Advertise"
  ]
  
  return <header className="">
    <ul className="flex justify-between max-sm:p-0 items-center text-1xl">
      {
        Menu.map((item)=>(
          <MenuItem key={item} link="link.com" name={item}/>
        ))
      }

    </ul>
  </header>
}