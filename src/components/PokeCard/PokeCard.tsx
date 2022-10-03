import React from 'react';
import { PokemonSchema } from '../../types/PokemonSchema';
import './PokeCard.css';
interface PokeCardProps {
    name: string | undefined;
    spriteUrl?: string;
}

function PokeCard({ name, spriteUrl }: PokeCardProps) {
    return (
        <div className='pokecard'>
            <img src={spriteUrl} alt='pokemon' className='pokemon-sprite' />
            <p>{name}</p>
        </div>
    );
}

export default PokeCard;
