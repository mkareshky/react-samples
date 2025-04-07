import { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import './style.css'

const StarRating = ({ nStart = 5 }: { nStart: number }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (index: number) => {
        setRating(index);
    }

    const handleHover = (index: number) => {
        setHover(index);
    }

    const handleLeave = () => {
        setHover(rating);
    }

    return (
        <div>
            {
                [...Array(nStart)].map((_, index) => {
                    index++;
                    return (
                        <FaStar
                            key={index}
                            className={(index <= (hover || rating)) ? 'active' : ''}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleHover(index)}
                            onMouseLeave={() => handleLeave()}
                            size={50}
                        />
                    )
                })
            }
        </div>
    );
}

export default StarRating;