import type { PokemonDetail } from "../types/pokemon";


export async function fetchPokemon(name: string): Promise<PokemonDetail | null> {

    const res = await fetch(`/api/pokemon/${encodeURIComponent(name)}`);

    if (res.status === 404) {
        return null;
    }

    if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
    }

    return (await res.json()) as PokemonDetail;
}