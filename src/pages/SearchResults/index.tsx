import { use } from 'react';
import { fetchData } from '../../assets/data';

type AlbumType = {
    id: number;
    title: string;
    year: number;
};

export default function SearchResults({ query }: { query: string }) {
    if (query === '') {
        return null;
    }
    const albums: AlbumType[] = use(fetchData(`/search?q=${query}`));
    if (albums.length === 0) {
        return <p>No matches for <i>"{query}"</i></p>;
    }
    return (
        <ul>
            {albums.map(album => (
                <li key={album.id}>
                    {album.title} ({album.year})
                </li>
            ))}
        </ul>
    );
}
