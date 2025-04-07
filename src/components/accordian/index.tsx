import React from "react";
import { accordionData } from "../../assets/data";
import "./styles.css"

const Accordian: React.FC = () => {

    const [multi, setMulti] = React.useState(false);
    const [slecteditem, setSelectedItem] = React.useState<number | null>(null);
    const [selectedItemList, setSelectedItemList] = React.useState<number[]>([]);

    const handleToggle = (id: number) => {
        console.log({ id })
        let cpyList = [...selectedItemList]
        const indexOfId = cpyList.indexOf(id);
        !multi ?
            setSelectedItem(id === slecteditem ? null : id) :
            (indexOfId === -1) ? cpyList.push(id) : cpyList.splice(indexOfId, 1);
        setSelectedItemList(cpyList);
    }

    return (
        <>
            <div className="wrapper">
                <div>
                    <button onClick={() => setMulti(!multi)}>
                        Enable Multi Selection
                    </button>
                </div>
                <div className="accordian">
                    {
                        accordionData.map(element => (
                            <div key={element.id} className="elements"
                                onClick={() => handleToggle(element.id)}>
                                <strong>{(slecteditem === element.id) ? "-" : "+"}</strong>
                                {element.title}
                                {((slecteditem === element.id) || (multi && selectedItemList.indexOf(element.id) !== -1)) ?
                                    <div className="content">{element.content}</div> :
                                    null
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Accordian;