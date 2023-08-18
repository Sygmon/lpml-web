import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  useSearchBox,
  useHits,
  Snippet,
} from "react-instantsearch";
import styles from "../scss/Sidebar.module.scss";
import Link from "next/link";

const searchClient = algoliasearch(
  "YDAI2FBH5X",
  "fc7cebb96b7664d69d8e2c3f1b3e3574"
);

function SearchBox({
  query,
  refine,
  inputRef,
}: {
  query: string;
  refine: (query: string) => void;
  inputRef?: React.Ref<HTMLInputElement>;
}) {
  return (
    <input
      type="search"
      aria-label="Search"
      value={query}
      onChange={(evt) => refine(evt.target.value)}
      ref={inputRef}
    />
  );
}

function Results({
  active,
  hide,
  reset,
}: {
  active: boolean;
  hide: () => void;
  reset: () => void;
}) {
  const { hits } = useHits();

  return active ? (
    <div className={styles.results}>
      {hits.map(
        (result) =>
          result?.url &&
          typeof result?.url === "string" && (
            <Link href={result?.url} key={result?.url}>
              <div
                className={styles.result}
                onClick={() => {
                  hide();
                  reset && reset();
                }}
              >
                <div className={styles.title}>{result.title}</div>
                <div className={styles.content}>
                  <Snippet attribute="content" hit={result} />
                </div>
              </div>
            </Link>
          )
      )}
    </div>
  ) : null;
}

function SearchBar({
  hide,
  inputRef,
}: {
  hide: () => void;
  inputRef?: React.Ref<HTMLInputElement>;
}) {
  const { query, refine, clear } = useSearchBox();

  return (
    <div className={styles.searchcontainer}>
      <div className={styles.searchbar}>
        <SearchBox query={query} refine={refine} inputRef={inputRef} />
      </div>
      <Results active={Boolean(query)} hide={hide} reset={clear} />
    </div>
  );
}

export default function Search({
  hide,
  inputRef,
}: {
  hide: () => void;
  inputRef?: React.Ref<HTMLInputElement>;
}) {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="netlify_f81c862b-0802-4633-bdf8-5fec7e7aaf73_main_all"
    >
      <SearchBar hide={hide} inputRef={inputRef} />
    </InstantSearch>
  );
}
