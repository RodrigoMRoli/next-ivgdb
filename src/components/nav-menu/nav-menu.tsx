"use client";

import * as React from "react";
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NavMenuItem, { NavMenuItemComponent } from "./nav-menu-item";
import UserMenu from "./user-menu";
import SearchBar from "./search-bar";

interface NavMenuProps {
    className?: string;
}

const endpoints: NavMenuItemComponent[] = [
    {
        title: "Categories",
        href: "/",
        description: "All Categories",
    },
];

export default function NavMenu({ className }: NavMenuProps) {
    className = className ?? "";
    return (
        <div
            className={`w-screen p-3 flex justify-center items-center ${className}`}
        >
            <NavigationMenu>
                <NavigationMenuList className="space-x-4">
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            Logo
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavMenuItem title={"Menu"} components={endpoints} />
                    <NavigationMenuItem>
                        <SearchBar />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <UserMenu className={navigationMenuTriggerStyle()} />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
