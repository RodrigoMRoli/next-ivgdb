"use client";

import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useEffect, useState } from "react";
import { SwitchMoonIcon, SwitchSunIcon } from "./switch-icon";

export function ThemeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export function ThemeToggleAlt() {
    const { theme, setTheme } = useTheme();
    const [reverseTheme, setReverseTheme] = useState("");
    const handleReverseTheme = (state: string) => {
        setReverseTheme(state);
    };

    useEffect(() => {
        const reverseThemeState = theme === "dark" ? "light" : "dark";
        handleReverseTheme(reverseThemeState);
    }, [theme]);

    return (
        <div className="flex items-center space-x-2">
            <Label htmlFor="theme-mode">Theme</Label>
            <Switch
                className={`bg-${theme}`}
                id="airplane-mode"
                icon={theme === "dark" ? <SwitchMoonIcon /> : <SwitchSunIcon />}
                onClick={() => setTheme(reverseTheme)}
            />
        </div>
    );
}
