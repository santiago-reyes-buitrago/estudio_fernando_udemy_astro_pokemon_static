import type { Result } from "../interfaces/pokemon-list-response.interface.ts";


export class ParamsResultPokemonMapper {
    static ResultsPokemonToParams(pokemonList: Result[]):{params: {name: string}, props: {url: string}}[]{
        return pokemonList.map((Pokemon,index) => ({
            params: {
                name: Pokemon.name,
                id: Pokemon.url.split('/').at(-2)
            },
            props: {
                url: Pokemon.url
            }
        }))
    }
}