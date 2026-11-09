export interface PokemonDetail {
    id: number,
    name: string,
    sprite: string | null,
    types: string[],
    weight: number,
    height: number
}