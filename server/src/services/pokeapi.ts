import type { RawPokemon } from "../types/pokeapi.js";
import type { PokemonDetail } from "../types/pokemon.js";


export async function getPokemonByName(name: string): Promise<PokemonDetail | null> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if(res.status === 404) {
        return null;
    }
    if(!res.ok) {
        throw new Error(`PokéAPI request failed (${res.status})`)
    }
    const apiData = (await res.json() as RawPokemon);

    return {
        id: apiData.id,
        name: apiData.name,
        height: apiData.height,
        weight: apiData.weight,
        types: apiData.types.map((apiType) => apiType.type.name),
        sprite: apiData.sprites.other?.["official-artwork"]?.front_default ?? apiData.sprites.front_default 
    };
}