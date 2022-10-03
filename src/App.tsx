import './App.css';
import Pokedex from './components/Pokedex/Pokedex';

import React, { Component } from 'react';
import { pokemonData } from './data/pokemonData';
import {
    UnpatchedPokemonSchema,
    PokemonSpritesSchema,
    PokemonSchema,
} from './types/PokemonSchema';

interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchedPokemons: PokemonSchema[];
    selectedPokemon?: PokemonSchema;
}

export class App extends Component<any, AppState> {
    state: AppState = {
        searchField: '',
        allPokemons: [],
        searchedPokemons: [],
        selectedPokemon: undefined,
    };

    componentDidMount(): void {
        const patchedPokemons: PokemonSchema[] =
            this.patchPokemonData(pokemonData);

        this.setState({
            ...this.state,
            allPokemons: patchedPokemons,
            searchedPokemons: patchedPokemons,
        });
    }

    patchPokemonData = (
        pokemons: UnpatchedPokemonSchema[]
    ): PokemonSchema[] => {
        const patchedPokemons: PokemonSchema[] = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined,
            };

            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch (e) {
                console.log('Exception while parsing the sprites');
            }

            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites,
            };

            return patchedPokemon;
        });

        return patchedPokemons;
    };

    filterPokemons = (filterValue: string) => {
        const { allPokemons } = this.state;
        const filteredPokemons = allPokemons.filter(
            (pokemon: PokemonSchema) => {
                return (
                    pokemon.name &&
                    pokemon.name
                        .toLowerCase()
                        .includes(filterValue.toLowerCase())
                );
            }
        );
        return filteredPokemons;
    };

    handleClick = (pokemonName: string) => {
        const searchedPokemons = this.filterPokemons(pokemonName);

        this.setState({
            ...this.state,
            selectedPokemon: searchedPokemons[0],
        });
    };

    handleInputChange = (inputValue: string) => {
        const { allPokemons } = this.state;
        const searchedPokemons = this.filterPokemons(inputValue);

        this.setState({
            ...this.state,
            searchField: inputValue,
            searchedPokemons: searchedPokemons,
        });
    };

    render() {
        return (
            <div className='App'>
                <h1>Pokedex</h1>
                <Pokedex
                    searchedPokemons={this.state.searchedPokemons}
                    handleInputChange={this.handleInputChange}
                    selectedPokemon={this.state.selectedPokemon}
                    handleClick={this.handleClick}
                />
            </div>
        );
    }
}

export default App;
