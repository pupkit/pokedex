import React from 'react';
import PokeCard from '../PokeCard/PokeCard';
import './PokeList.css';
import { PokemonSchema } from '../../types/PokemonSchema';
interface PokeListProps {
    searchedPokemons: PokemonSchema[];
    handleClick: (inputValue: string) => void;
}

function PokeList(props: PokeListProps) {
    return (
        <div className='pokelist'>
            {props.searchedPokemons &&
                props.searchedPokemons.map(({ id, name, sprites }) => {
                    return (
                        name && (
                            <PokeCard
                                key={id}
                                name={name}
                                spriteUrl={sprites && sprites.normal}
                                handleClick={props.handleClick}
                            />
                        )
                    );
                })}
        </div>
    );
}

export default PokeList;
