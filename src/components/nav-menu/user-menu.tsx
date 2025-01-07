import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggleAlt } from "../theme-toggle";
import { NavigationMenuTrigger } from "../ui/navigation-menu";
import { UserAvatar } from "../user-avatar";

interface UserMenuProps {
    className: string;
}

export default function UserMenu({ className }: UserMenuProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={className}>
                <div className="flex justify-center items-center gap-2">
                    <UserAvatar />
                    Username
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Your Favorites</DropdownMenuItem>
                <DropdownMenuItem>Your reviews</DropdownMenuItem>
                <DropdownMenuItem>Your Lists</DropdownMenuItem>
                <DropdownMenuItem>
                    <ThemeToggleAlt />
                </DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
