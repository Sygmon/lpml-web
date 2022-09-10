import { useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, useSearchBox, useHits, Snippet } from 'react-instantsearch-hooks-web';
import styles from "../scss/Sidebar.module.scss";1
import Link from "next/link";

const searchClient = algoliasearch('YDAI2FBH5X', 'fc7cebb96b7664d69d8e2c3f1b3e3574');

function SearchBox ({ query, refine }) {
    return (
        <input type="search" value={query} onChange={evt => refine(evt.target.value)} />
    );
}

function Results ({ active, hide, reset }) {
    const { hits, results, sendEvent } = useHits();

    return active ? (
        <div className={styles.results}>
            {hits.map((result, index) => (
                <Link href={result.url}>
                    <div className={styles.result} onClick={() => {hide(); reset && reset();}}>
                        <div className={styles.title}>
                            {result.title}
                        </div>
                        <div className={styles.content}>
                            <Snippet attribute="content" hit={result} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    ) : null;
}

function SearchBar({ hide }) {
    const { query, refine, clear, isSearchStalled } = useSearchBox();

    return (
        <div className={styles.searchcontainer}>
            <div className={styles.searchbar}>
                <SearchBox query={query} refine={refine} />
            </div>
            <Results active={query} hide={hide} reset={clear} />
        </div>
    );
}

export default function Search({ hide }) {
    return (
        <InstantSearch searchClient={searchClient} indexName="netlify_f81c862b-0802-4633-bdf8-5fec7e7aaf73_main_all">
            <SearchBar hide={hide} />
        </InstantSearch>
    );
}