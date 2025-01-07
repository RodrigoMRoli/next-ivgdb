import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserAvatar() {
    return (
        <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>UA</AvatarFallback>
        </Avatar>
    );
}
