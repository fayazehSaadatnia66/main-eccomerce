"use client"

import Link from "next/link"
import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { FaLockOpen } from "react-icons/fa"
import { IoReorderFourOutline } from "react-icons/io5"
import "./style.scss"
import { ListItem } from "./list-item"
import { navItems } from "./items"
import { Separator } from "@/components/ui/separator"

const MainNavigationMenu = () => {
  return (
    <div className="w-full border-gray-200">
      <NavigationMenu className="w-full " dir="rtl" >
        <NavigationMenuList >
          {navItems.map(({ name, icon: Icon, children }, index) => (
            <NavigationMenuItem key={name}>
              <NavigationMenuTrigger style={{backgroundColor:"unset !important", color:"white" }}>
                <div
                  className={cn(
                    "flex justify-center",
                    index !== 0 ? "text-gray-300" : ""
                  )}
                >
                  <Icon className="me-2" size={20} />
                  {name}
                  {/* {index === 0 && (
                    <Separator
                      className="ms-2 h-5 bg-gray-300"
                      orientation="vertical"
                    />
                  )} */}
                </div>
              </NavigationMenuTrigger>
              <NavigationMenuContent >
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {/* <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div>
                          <FaLockOpen className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li> */}
                  {children.map((childItem, index) => (
                    <ListItem
                    style={{backgroundColor:"none !important"}}
                      key={childItem.name + index}
                      href={childItem.href}
                      title={childItem.name}
                    >
                      {childItem.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default MainNavigationMenu
