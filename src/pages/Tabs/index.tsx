import { Link } from "react-router-dom"
import Tabs from "../../components/tabs";
import { JSX } from "react";

const SomeCont = () => (<div style={{ fontSize: '30px', color: 'red' }}>Tab content number 3</div>)

export interface TabContent {
    id: number;
    label: string;
    content: JSX.Element;
}

const tabContetnt: TabContent[] = [
    {
        id: 1,
        label: 'Tab1',
        content: <div>Tab content number 1</div>
    },
    {
        id: 2,
        label: 'Tab2',
        content: <div>Tab content number 2</div>
    },
    {
        id: 3,
        label: 'Tab3',
        content: <SomeCont />
    },
]

const TabsPage = () => {
    return (
        <>
            <Link to="/">Home Page</Link>
            <br />
            <br />
            <Tabs tabContetnt={tabContetnt} />
        </>
    )
}

export default TabsPage;