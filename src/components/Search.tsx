import MainHook from '../hooks/';
import styles from './search.module.scss'

const Search = () => {
    const { doSearch, pokemonsFound } = MainHook();

    return <div id={styles.Search}>
        <input placeholder="Type here..." type="text" onKeyUp={(e) => doSearch(e?.target)} />
        <div id={styles.results}>
            {pokemonsFound.map(p => {
                return <article>
                    {p.name}
                </article>
            })}
        </div>
    </div>
}

export default Search;
