import { Link } from "react-router-dom";
import ImageSlider from "../../components/image_slider";

const ImageSliderPage: React.FC = () => {
    return (
        <>
            <Link to="/">Home Page</Link>
            <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>
        </>
    )
}
export default ImageSliderPage;