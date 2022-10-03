import './PokeCard.css';
interface PokeCardProps {
    name: string;
    spriteUrl?: string;
    handleClick: (inputValue: string) => void;
}

function PokeCard({ name, spriteUrl, handleClick }: PokeCardProps) {
    return (
        <div className='pokecard' onClick={(e) => handleClick(name)}>
            <img src={spriteUrl} alt='pokemon' className='pokemon-sprite' />
            <p>{name}</p>
        </div>
    );
}

export default PokeCard;
