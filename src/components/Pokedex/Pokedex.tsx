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
    handleInputChange: (inputValue: string) => void;
    handleClick: (inputValue: string) => void;
    selectedPokemon?: PokemonSchema;
}

function Pokedex(props: PokedexProps) {
    return (
        <div className='pokedex-container'>
            <div className='pokelist-container'>
                <SearchBox handleInputChange={props.handleInputChange} />
                <PokeList
                    searchedPokemons={props.searchedPokemons}
                    handleClick={props.handleClick}
                />
            </div>
            <div className='pokesearchresult-container'>
                <PokeSearchResult selectedPokemon={props.selectedPokemon} />
            </div>
        </div>
    );
}

export default Pokedex;
