import { useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, useSearchBox, useHits, Snippet } from 'react-instantsearch-hooks-web';
import styles from "../scss/Sidebar.module.scss";
import {
    FaSearch,
} from "react-icons/fa";

const searchClient = algoliasearch('YDAI2FBH5X', 'fc7cebb96b7664d69d8e2c3f1b3e3574');

function SearchBox ({ setActive }) {
    const { query, refine, clear, isSearchStalled } = useSearchBox();

    useEffect(() => {
        setActive(query);
    }, [query]);

    return (
        <input type="search" value={query} onChange={evt => refine(evt.target.value)} />
    );
}

function Results ({ active }) {
    const { hits, results, sendEvent } = useHits();

    return active ? (
        <div className={styles.results}>
            {hits.map((result, index) => (
                <a className={styles.result} href={result.url}>
                    <div className={styles.title}>
                        {result.title}
                    </div>
                    <div className={styles.content}>
                        <Snippet attribute="content" hit={result} />
                    </div>
                </a>
            ))}
        </div>
    ) : null;
}

export default function SearchBar(props) {
    const [active, setActive] = useState(false);

    return (
        <InstantSearch searchClient={searchClient} indexName="netlify_f81c862b-0802-4633-bdf8-5fec7e7aaf73_main_all">
            <div className={styles.search}>
                <div className={styles.searchbar}>
                    <SearchBox setActive={setActive} />
                    <FaSearch className={styles.icon} />
                </div>
                <Results active={active} />
            </div>
        </InstantSearch>
    );
}