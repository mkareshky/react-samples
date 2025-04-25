import { useEffect, useState } from "react"

export const useFetchData = (url: string, options = {}) => {

    const [data, setData] = useState<any>(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(url, { ...options });
            if (res.ok) {
                const response = await res.json();
                setData(response);
            } else {
                setErrorMsg(res.statusText);
            }
        } catch (error) {
            setErrorMsg((error instanceof Error ? error.message : 'Unknown Error'))
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);
    
    return {
        data,
        errorMsg,
        loading
    }
}
