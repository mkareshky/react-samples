import React, { useState } from "react";
import QRCode from 'react-qr-code';
import "./styles.css"

const QRCodeComponent: React.FC = () => {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    const [disabled, setDisabled] = useState(false);
    return (
        <>
            <h1>QR Code Generator</h1>
            <input value={input} type="text" onChange={e => { setInput(e.target.value); setDisabled(false); }}></input>
            <button onClick={() => { setQrCode(input); setDisabled(true); setInput(''); }} disabled={disabled}> Generate </button>
            <QRCode value={qrCode} size={400} bgColor='#ffff' />
        </>
    )

}

export default QRCodeComponent;