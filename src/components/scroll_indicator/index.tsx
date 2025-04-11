import { useEffect, useState } from "react";
import "./styles.css"

export interface Quote {
    id: number
    quote: string
    author: string
}

const ScrollIndicator = ({ url }: { url: string }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<Quote[] | []>([]);
    const [scrollPercent, setScrollPercent] = useState(0);
    console.log(scrollPercent);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(url);
            const data = await res.json();
            console.log({ data })
            setData(data.quotes);
        } catch (error) {
            setLoading(true);
            if (error instanceof Error) {
                setError(error.message);
            } else setError(String(error));
        }
        finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchData();
    }, [url]);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percentScrolled = (scrollTop / scrollHeight) * 100;
        setScrollPercent(Math.floor(percentScrolled));
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return window.removeEventListener('scroll', () => { });
    }, [])

    if (loading) return <p>Loading...</p>

    if (error) return <p className="error">{error}</p>

    return (
        <div
            style={{
                top: '0',
            }}>
            <div style={{
                top: '0',
                width: '75vw',
                height: '50px',
                background: 'blue',
                position: 'fixed',
                color: 'white'
            }}>
                <p>
                    Best Quotes
                </p>
            </div>

            <div style={{
                top: '50px',
                width: '75vw',
                height: '10px',
                background: "black",
                position: 'fixed',
                color: 'black'
            }}>

                <div className="progress-tracking" style={{
                    width: `${scrollPercent}%`,
                    height: '10px',
                    background: "red"
                }}>

                </div>
            </div>
            <div style={{
                marginTop: '50px',
            }}>

                {
                    data && data.length &&
                    data.map((item) =>
                        <div key={item.id}>
                            <p>
                                {item.quote}
                            </p>
                            <hr />
                        </div>
                    )
                }
            </div>
        </div>
    )

}

export default ScrollIndicator;