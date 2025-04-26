import { useEffect, useState } from "react";


const useWindowResize = () => {

    const [windowSize, setWindowSize] = useState({
        width: 0,
        hight: 0
    });

    const handleResize = () => {
        setWindowSize({ width: window.innerWidth, hight: window.innerHeight });
    }

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

export default useWindowResize;