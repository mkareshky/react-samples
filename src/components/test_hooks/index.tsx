import { useFetchData } from "../../hooks/useFetchData";
import { Product } from "../load_more_product";

const TestHooks = () => {


    const {
        data,
        errorMsg,
        loading
    }: { data: any, errorMsg: string, loading: boolean } = useFetchData('https://dummyjson.com/products');

    return (
        <div>

            {errorMsg && <h3>{errorMsg}</h3>}
            {loading && <h3>Loading...</h3>}
            {data && data.products && data.products.length && data.products.map((item: Product) => (<div key={item.id}>{item.title}</div>))}

        </div>
    )
}
export default TestHooks;