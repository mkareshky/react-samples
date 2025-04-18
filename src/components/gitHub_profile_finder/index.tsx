import { useState } from "react";


interface GitHubData {
    login: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    public_gists: number;
    created_at: string;
}

const GitHubProfileFinder = () => {

    const [userName, setUserName] = useState('mkareshky');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>('');
    const [data, setData] = useState<GitHubData | null>(null);

    interface DetailsProps {
        data: GitHubData | null;
    }

    const Details = ({ data }: DetailsProps) => {

        if (data) {
            const { login, avatar_url, html_url, public_repos, public_gists, created_at } = data;
            return (
                <div>
                    <div><b>User Name: </b><label>{login}</label></div>
                    <div><b>Public Repos: </b><label>{public_repos}</label></div>
                    <div><b>Public Gists: </b><label>{public_gists}</label></div>
                    <div><b>Created At: </b><label>{created_at}</label></div>
                    <div><img src={avatar_url} /></div>
                    <br />
                    <div>
                        <b>Profile: </b>
                        <a href={html_url} target="_blank">Go to github profile</a>
                    </div>
                </div>
            )

        }
        return <div>No Data available...</div>
    }
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            const data = await res.json();
            setData(data);
            console.log(data);
        }
        catch (e) {
            setError(e);
        }
        finally {
            setLoading(false)
        }

    }

    if (error) return <div>{(error instanceof Error) ? <p>{error.message}</p> : <p>An error occurred</p>}</div>;

    {loading && <p>{loading && 'Louding...'}</p>}

    return (
        <div>
            <input
                name="search-by-username"
                type="text"
                placeholder="Search Github Username..."
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <button onClick={() => fetchData()}>Search</button>
            {data && <Details data={data} />}
        </div>
    )
}

export default GitHubProfileFinder;