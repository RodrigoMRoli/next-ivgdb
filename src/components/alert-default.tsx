import { Terminal } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

interface AlertDefaultProps {
    componentClass?: string;
    title?: string;
    description?: string;
}

export default function AlertDefault({
    componentClass,
    title,
    description,
}: AlertDefaultProps) {
    componentClass = componentClass ?? "h-4 w-4";
    title = title ?? "Title Template";
    description =
        description ??
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam repellendus dignissimos magni repellat fugit, perspiciatis atque deleniti, reprehenderit cum quia iusto obcaecati quo architecto modi mollitia nostrum et aliquid.";
    return (
        <Alert>
            <Terminal className={componentClass} />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
        </Alert>
    );
}
