import type { RawPokemon } from "../types/pokeapi.js";
import type { PokemonDetail } from "../types/pokemon.js";


export async function getPokemonByName(name: string): Promise<PokemonDetail | null> {
    

    const clean = name.trim().toLowerCase().replace(/[ .]+/g, "-");
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(clean.trim())}`);
    
    if (res.status >= 400 && res.status < 500) {
        return null;
     } 

    if (!res.ok) {
        throw new Error(`PokeAPI request failed (${res.status})`)
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