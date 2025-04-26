import { useRef, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { Product } from "../load_more_product";
import useOutsideClick from "../../hooks/useOutsideClick";
import useWindowResize from "../../hooks/useWindowResize";

const TestHooks = () => {

    const ref = useRef(null);

    const [showContent, setShowContent] = useState(false);

    const { width, hight } = useWindowResize();

    useOutsideClick(ref, () => setShowContent(false))
    const {
        data,
        errorMsg,
        loading
    }: { data: any, errorMsg: string, loading: boolean } = useFetchData('https://dummyjson.com/products');

    return (
        <div>
            <div>
                <b>Width: </b>{width}
                <br />
                <b>Hight: </b>{hight}
            </div>
            <button onClick={() => setShowContent(true)}>Click to show products</button>
            {showContent ?
                <div
                    ref={ref}
                    style={{
                        top: 50,
                        padding: '1rem',
                        backgroundColor: '#eee',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                    }}
                >
                    {errorMsg && <h3>{errorMsg}</h3>}
                    {loading && <h3>Loading...</h3>}
                    {data && data.products && data.products.length && data.products.map((item: Product) => (<div key={item.id}>{item.title}</div>))}
                </div> :
                null
            }
        </div>
    )
}
export default TestHooks;