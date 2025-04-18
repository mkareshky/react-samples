import { useState } from "react";

interface Item { firstName: String }

const SearchAutocomplete = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown | null>(null);
    const [data, setData] = useState<[] | string[]>([]);
    const [select, setSelect] = useState('');

    const handleSearch = async (inp: string) => {
        if (inp.length > 1) {
            setLoading(true);
            try {
                const res = await fetch('https://dummyjson.com/users');
                const dataList = await res.json();
                const names: string[] = dataList.users.map((item: Item) => item.firstName);
                const filtred = names.filter(item => item.toLowerCase().indexOf(inp.toLowerCase()) > -1);
                setData(filtred);

            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
    }

    if (error) return <div>{(error instanceof Error) ? <p>{error.message}</p> : <p>An error occurred</p>}</div>;
    { loading && <p>{loading && 'Louding...'}</p> }

    return (
        <div>
            <input value={select} onChange={(e) => setSelect(e.target.value)} alt="Please write here..."></input>
            <button onClick={() => handleSearch(select)}>Search</button>
            {(data && data.length) ?
                <ul>
                    {data.map((item, index) => <li key={index}>{item}</li>)}
                </ul> :
                <></>
            }
        </div>
    )
}

export default SearchAutocomplete;