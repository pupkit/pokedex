import React from 'react';
import './PokeSearchResult.css';
function PokeSearchResult() {
    const selectedPokemon = true;
    return (
        <div className='poke-result-card'>
            {selectedPokemon ? (
                <div>
                    {/* Add Image Here */}
                    <p>Name: Pikachu</p>
                    <p>Id: Some id</p>
                    <p>Height: Some Height</p>
                    <p>Weight: Some Weight</p>
                    <p>Base Exp: 100xp</p>
                </div>
            ) : (
                <h2>Welcome to the Pokedex</h2>
            )}
        </div>
    );
}

export default PokeSearchResult;
