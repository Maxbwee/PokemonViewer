import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import { useState } from "react";
import { fetchPokemon } from "../api/pokemon";
import type { PokemonDetail } from "../types/pokemon";
import PokemonCard from "../components/PokemonCard";

export default function SearchPage() {
    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
    const [error, setError] = useState<string| null>(null);

    async function handleSearch(name: string) {
        setLoading(true);
        setError(null);
        setPokemon(null);
        try {
            const result = await fetchPokemon(name);

            if(result) {
                setPokemon(result);
            } else {
                setError("Pokemon not found");
           }

        } catch {
            setError("Something went wrong. Is the server running?")
        }
        finally {
            setLoading(false);
        }
    }

    return (
    <div>
    <SearchBar onSearch={handleSearch} />
    {loading && <Loading/>}
    {error && <p className="search-error">{error}</p>}
    {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
    );
}