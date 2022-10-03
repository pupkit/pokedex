import React from 'react';
import './SearchBox.css';

interface SearchBoxProps {
    handleInputChange: (inputValue: string) => void;
}

function SearchBox({ handleInputChange }: SearchBoxProps) {
    return (
        <input
            type='search'
            className='search'
            placeholder='Search Pokemon'
            onChange={(e) => {
                handleInputChange(e.target.value);
            }}
        />
    );
}

export default SearchBox;
