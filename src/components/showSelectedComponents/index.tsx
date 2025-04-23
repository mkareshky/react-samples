import { useContext } from "react";
import ShowComponentsGlobalState, { ShowComponentsContext, ShowComponentsType } from "../../contexts/ShowComponentContext";
import { tabContetnt } from "../../pages/Tabs";
import AccordianComponent from "../accordian";
import QRCodeComponent from "../qr_code";
import StarRatingComponent from "../star_rating";
import TabsComponent from "../tabs";


const ShowSelected = () => {

    const { loading, enableFlag } = useContext(ShowComponentsContext) as ShowComponentsType;

    const checkEnFlag = (flag: string) => {
        return enableFlag[flag];
    }

    const componentsRender = [
        {
            key: 'qrcode',
            component: <QRCodeComponent />
        },
        {
            key: 'accordian',
            component: <AccordianComponent />

        },
        {
            key: 'tabs',
            component: <TabsComponent tabContetnt={tabContetnt} />
        },
        {
            key: 'star_rat',
            component: <StarRatingComponent nStart={8} />
        }
    ]

    if (loading) return <h3>Loading...</h3>;
    return (
        <ShowComponentsGlobalState>
            {componentsRender.map((item, index) => checkEnFlag(item.key) ? <div key={index}>{item.component}</div> : null)}
        </ShowComponentsGlobalState>
    )
}

export default ShowSelected;