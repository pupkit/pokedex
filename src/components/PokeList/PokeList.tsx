import React from 'react';
import PokeCard from '../PokeCard/PokeCard';
import './PokeList.css';

function PokeList() {
    return (
        <div className='pokelist'>
            <PokeCard name='pikachu' />
            <PokeCard name='bulbasaur' />
            <PokeCard name='ivysaur' />
            <PokeCard name='venasaur' />
            <PokeCard name='charizard' />
        </div>
    );
}

export default PokeList;
