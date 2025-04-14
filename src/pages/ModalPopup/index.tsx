import { Link } from "react-router-dom"
import ModalPopup from "../../components/modal_popup";
import { useState } from "react";

const ModalPopupPage = () => {

    const [modal, setModal] = useState(false);

    return (
        <div>
            <Link to="/">Go To Home Page</Link>
            <div>
                <button style={{ marginTop: "50px" }} onClick={() => setModal(!modal)}>Modal</button>
            </div>
            {modal && <ModalPopup setModal={setModal} body="Custom Body" />}
        </div>
    )
}

export default ModalPopupPage;