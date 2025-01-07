"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { VariantProps } from "class-variance-authority";
import { ThemeConfig } from "tailwindcss/types/config";
import { DefaultColors } from "tailwindcss/types/generated/colors";
import { ThemeToggle, ThemeToggleAlt } from "../theme-toggle";
import DrawerMenu from "./drawer-menu";
import { ListItem } from "./list-item-menu";
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
                        <Link href="/">
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Logo
                            </NavigationMenuLink>
                        </Link>
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
