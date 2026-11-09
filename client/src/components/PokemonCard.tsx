import type { PokemonDetail } from "../types/pokemon"


type PokemonCardProps = {
    pokemon: PokemonDetail;
}

export default function PokemonCard({pokemon} : PokemonCardProps) {

    const heightM = (pokemon.height / 10).toFixed(1);
    const weightKg = (pokemon.weight / 10).toFixed(1);

    return (
        <article className="pokemon-card">
            <section className="pokemon-card-image-section">
                {pokemon.sprite ? (
                    <img className="pokemon-card-image" src={pokemon.sprite} alt={pokemon.name} />
                ) : (
                    <div className="pokemon-card-image pokemon-card-no-image">No image</div>
                )}
            </section>

            <section className="pokemon-card-header">
                <p className="pokemon-card-number">Pokedex entry: {pokemon.id}</p>
                <h2 className="pokemon-card-name">Name: {pokemon.name}</h2>
            </section>

            <section className="pokemon-card-types" aria-label="Types">
                {pokemon.types.map((type) => (
                    <span key={type} className={`type-badge type-${type}`}>
                       Type: {type}
                    </span>
                ))}
            </section>

            <section className="pokemon-card-info" aria-label="Size">
                <div>
                    <h3>Height</h3>
                    <p>{heightM} m</p>
                </div>
                <div>
                    <h3>Weight</h3>
                    <p>{weightKg} kg</p>
                </div>
            </section>
        </article>
    );
}