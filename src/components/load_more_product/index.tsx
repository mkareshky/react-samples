import { useEffect, useState } from 'react';
import './styles.css';

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
}

export interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

export interface Meta {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
}

export interface Review {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
}


const LoadMoreProduct = () => {

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState<[] | Product[]>([]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
            const data = await response.json();
            if (data && data.products && data.products.length) {
                setProducts(prevProducts => {
                    // Only append products if they aren't already in the list
                    const newProducts: Product[] = data.products.filter(
                        (newProduct: Product) => !prevProducts.some(existingProduct => existingProduct.id === newProduct.id)
                    );
                    return [...prevProducts, ...newProducts];
                });
                setCount(prevCount => prevCount + 1);
                console.log(data.products);
            }
        } catch (e: any) {
            setErrorMsg(`Error: ${e.message}`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(); // Fetch initially on mount
    }, []);

    return (
        <div className='lmp-container'>
            {loading && <p>loading...</p>}
            {errorMsg && <p>{errorMsg}</p>}
            {
                products && products.length &&
                <div className='product-container'>
                    {
                        products.map(product => {
                            return (
                                <div key={product.id} className='product-thumnail'>
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                    />
                                    <h6>{product.title}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            }
            <button onClick={fetchData} disabled={count * 20 >= 100}>{(count * 20 >= 100) ? "No more..." : "Load More..."}</button>
        </div>
    )
}

export default LoadMoreProduct;