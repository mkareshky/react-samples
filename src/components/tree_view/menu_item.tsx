import { RenderMenu } from "./render_menu";
import { MenuData } from "./types";

export const MenuItems = ({ data: menuData }: { data: MenuData[] }) => {


    return (
        <ul><RenderMenu data={menuData} /></ul>
    )
}