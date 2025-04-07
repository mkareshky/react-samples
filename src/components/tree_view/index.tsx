import React from "react";
import "./styles.css"
import { MenuItems } from "./menu_item";
import { menuData } from "../../assets/data"

const TreeView: React.FC = () => {
    return (
        <MenuItems data={menuData} />
    )

}

export default TreeView;