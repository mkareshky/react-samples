import { Link } from "react-router-dom";
import QRCode from "../../components/qr_code";

const QRCodePage: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link style={{ marginBottom: '50px' }} to="/">Home Page</Link>

            < QRCode />
        </div>
    )
}
export default QRCodePage;