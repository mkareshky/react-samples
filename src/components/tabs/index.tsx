import { useState } from "react";
import { TabContent } from "../../pages/Tabs";
import './styles.css'

const Tabs = ({ tabContetnt }: { tabContetnt: TabContent[] }) => {

    const [currentItem, setCurrentItem] = useState<null | TabContent>(null);

    return (
        <div>
            <div className="tab-items">
                {
                    tabContetnt && tabContetnt.length &&
                    tabContetnt.map((item) =>
                        <div
                            className={currentItem && item.id === currentItem.id ? 'active-item' : ''}
                            key={item.id}
                            onClick={() => setCurrentItem(item)}
                        >
                            <p>{item.label}</p>
                        </div>
                    )

                }
            </div>
            <div>
                {
                    currentItem && <div>
                        {currentItem.content}
                    </div>
                }
            </div>
        </div>
    )
}

export default Tabs;