import React from 'react';
import PokeList from '../PokeList/PokeList';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import './Pokedex.css';
import {
    UnpatchedPokemonSchema,
    PokemonSpritesSchema,
    PokemonSchema,
} from '../../types/PokemonSchema';

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
}

function Pokedex(props: PokedexProps) {
    return (
        <div className='pokedex-container'>
            <div className='pokelist-container'>
                <SearchBox />
                <PokeList searchedPokemons={props.searchedPokemons} />
            </div>
            <div className='pokesearchresult-container'>
                <PokeSearchResult />
            </div>
        </div>
    );
}

export default Pokedex;
