import './styles.css';

const ModalPopup = ({ setModal, header, body, footer }: { setModal: React.Dispatch<React.SetStateAction<boolean>>, header?: string; body?: string; footer?: string; }) => {

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setModal(false);
        }
      };
    
    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-container">
                <div className="modal-header">
                    {header ? header : 'Default Header'}
                    <div><span onClick={() => setModal(false)}>&times;</span></div>
                </div>
                <div className="modal-body">
                    {body ? body : 'Default Body'}
                </div>
                <div className="modal-footer">
                    {footer ? footer : 'Default Footer'}
                </div>
            </div>
        </div>
    )

}

export default ModalPopup;