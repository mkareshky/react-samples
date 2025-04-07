import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './styles.css';
import { useEffect, useState } from 'react';

interface ImageSliderProps {
    url: string;
    page: string;
    limit: string;
}

interface Image {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

const ImageSlider = ({ url, page, limit }: ImageSliderProps) => {

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [images, setImages] = useState<[] | Image[]>([]);
    const [currImg, setCurrImg] = useState('0');

    const fetchImages = async ({ url, page, limit }: ImageSliderProps) => {
        try {
            setLoading(true);
            const respond = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await respond.json();
            if (data) setImages(data);
        } catch (e: unknown) {
            setErrorMsg((e as any).message)
        }
        finally { setLoading(false); }
    }

    const handlePrev = () => {
        setCurrImg(currImg === '0' ? (images.length - 1).toString() : (+currImg - 1).toString())
    }
    const handleNext = () => {
        setCurrImg(currImg === (images.length - 1).toString() ? '0' : (+currImg + 1).toString())
    }

    useEffect(() => {
        fetchImages({ url, page, limit });
    }, []);

    return (
        <div className="container">
            <div>{loading ? "Loading..." : ""}</div>
            <div className='error'>{errorMsg ? `Erorr: ${errorMsg}` : ""}</div>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handlePrev} />
            {
                images && images.length && images.map((image, i) => {
                    return (
                        <img
                            key={image.id}
                            src={image.download_url}
                            className={i.toString() === currImg ? 'current-image' : 'hide'}
                        >
                        </img>
                    )
                })
            }
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={handleNext} />
            <span className="circle-indicator">
                {
                    images && images.length && images.map((_, i) => {
                        return (
                            <button
                                className={
                                    currImg === i.toString() ?
                                        "current-indicator" : "current-indicator inactive"
                                }
                                onClick={() => setCurrImg(i.toString())}
                            >
                            </button>
                        )
                    })
                }
            </span>
        </div>
    )
}

export default ImageSlider;