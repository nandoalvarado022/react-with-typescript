import { useEffect, useState } from "react";
import { Pokemon } from "../interfaces/Pokemon";

const MainHook = () => {
    let delayTimer: any;
    const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
    const [errors, setErrors] = useState<Array<any>>([]);
    const [pokemonsFound, setPodemonsFound] = useState<Array<Pokemon>>([]);

    const getData = async () => {
        try {
            const req = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100');
            const result = await req.json();
            setPokemons(result?.results);
            setPodemonsFound(result?.results);
        } catch {

        }
    }

    const seachByWord = (input: any) => {
        const { value } = input
        const result: any = [];
        pokemons.forEach(p => p.name.includes(value) ? result.push(p) : false);
        setPodemonsFound(result);
        debugger;
    }

    const doSearch = (text: any) => {
        clearTimeout(delayTimer);
        delayTimer = setTimeout(function () {
            seachByWord(text);
        }, 1000); // Will do the ajax stuff after 1000 ms, or 1 s
    }

    useEffect(() => {
        getData();
    }, []);

    return {
        doSearch,
        pokemonsFound,
    }
}

export default MainHook;

