import React, { Component } from 'react';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import './Pokedex.css';

export class Pokedex extends Component {
    render() {
        return (
            <div className='pokedex-container'>
                <div className='pokelist-container'>
                    <SearchBox />
                </div>
                <div className='pokesearchresult-container'>
                    <PokeSearchResult />
                </div>
            </div>
        );
    }
}

export default Pokedex;
