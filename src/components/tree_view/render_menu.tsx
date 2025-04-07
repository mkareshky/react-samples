import { useState } from "react";
import { MenuItems } from "./menu_item";
import { MenuData } from "./types";

export const RenderMenu = ({ data = [] }: { data: MenuData[] }) => {

    const [open, setOpen] = useState<{ [key: string]: boolean }>({});

    // const handleToggleChild = (getCurrLabel) => {
    //     setOpen({
    //         ...open,
    //         [getCurrLabel]: !open[getCurrLabel],
    //     });

    //     console.log(open);

    // }

    return (
        <>
            {data.map((item) => {
                return (
                    <li
                        key={item.label}

                    >
                        <span
                            style={{ cursor: 'grabbing' }}
                            onClick={() => {
                                setOpen({ ...open, [item.label]: !open[item.label] });
                                console.log({ [item.label]: item.label })
                            }}
                        >
                            {(item.children && item.children.length) ? (open[item.label]) ? '-' : '+' : ' '}
                            {item.label}
                        </span>

                        {/* {(item && item.children && item.children?.length) && <MenuItems data={item.children} />} */}
                        {(item && item.children && item.children?.length) && (open[item.label]) ? <MenuItems data={item.children} /> : <></>}
                    </li>
                )
            })}
        </>
    )
}