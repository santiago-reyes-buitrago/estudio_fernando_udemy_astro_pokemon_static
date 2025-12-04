import type { Result } from "./interfaces/pokemon-list-response.interface";


export class ParamsResultPokemonMapper {
    static ResultsPokemonToParams(pokemonList: Result[]):{params: {name: string}, props: {url: string}}[]{
        return pokemonList.map(Pokemon => ({
            params: {
                name: Pokemon.name
            },
            props: {
                url: Pokemon.url
            }
        }))
    }
}