import {type Component, createSignal, For} from "solid-js";
import {FAVORITE_POKEMONS} from "@/constants/Keys/favoritePokemons.key.ts";

interface Props {

}

const getLocalStorage = () => JSON.parse(localStorage.getItem(FAVORITE_POKEMONS)!) ?? []

export const FavoritePokemons: Component<Props> = () => {
    const [pokemons,setPokemons] = createSignal(getLocalStorage());
    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
            <For each={pokemons()}>{pokemon => <h1>{pokemon.name}</h1>}</For>
        </div>
    )
}