import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { ListItem } from "./list-item-menu";

export type NavMenuItemProps = {
    title: string;
    components: NavMenuItemComponent[];
};

export type NavMenuItemComponent = {
    title: string;
    href: string;
    description: string;
};

export default function NavMenuItem({ title, components }: NavMenuItemProps) {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>{title ?? "Title"}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components
                        ? components.map((component) => (
                              <ListItem
                                  key={component.title}
                                  title={component.title}
                                  href={component.href}
                              >
                                  {component.description}
                              </ListItem>
                          ))
                        : null}
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
}
