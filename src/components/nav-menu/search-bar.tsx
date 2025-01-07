import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchBar() {
    return (
        <div className="relative">
            <Search className="absolute left-2 top-2.5 h-3 w-3 text-muted-foreground" />
            <Input placeholder="Search" className="h-8 pl-9" />
        </div>
    );
}
