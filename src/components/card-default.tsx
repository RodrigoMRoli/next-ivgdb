"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface CardDefaultProps {
    cardTitle?: string;
    cardDescription?: string;
    cardActionLabel?: string;
    children: React.ReactNode;
}

export default function CardDefault({
    cardTitle,
    cardDescription,
    cardActionLabel,
    children,
}: CardDefaultProps) {
    return (
        <Card className="w-[350px] h-fit">
            <CardHeader>
                <CardTitle>{cardTitle ?? "Template Title"}</CardTitle>
                <CardDescription>
                    {cardDescription ?? "Template Description"}
                </CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button
                    onClick={() => {
                        console.log("oi!");
                    }}
                >
                    {cardActionLabel ?? "Submit"}
                </Button>
            </CardFooter>
        </Card>
    );
}
