import {type Component, createSignal, Show} from "solid-js";
import {FAVORITE_POKEMONS} from "@/constants/Keys/favoritePokemons.key.ts";

interface Props {
    pokemon: FavoritePokemon
}

export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {
    const [isVisible,setIsVisible] = createSignal(true);
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`

    const deleteFavoritePokemon = () => {
        const FavoritesPokemons: FavoritePokemon[] = JSON.parse(localStorage.getItem(FAVORITE_POKEMONS)!) ?? [];
        const index = FavoritesPokemons.findIndex(favoritePokemon => favoritePokemon.id === pokemon.id);
        FavoritesPokemons.splice(index,1);
        localStorage.setItem(FAVORITE_POKEMONS,JSON.stringify(FavoritesPokemons));
        setIsVisible(false);
    }

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col justify-center items-center">
                <a href={`/pokemon/${pokemon.id}`}>
                    <img src={imageSrc} alt={pokemon.name} style={`view-transition-name: ${pokemon.name}-image`}/>
                    <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
                </a>
                <button class="text-red-400" onClick={deleteFavoritePokemon}>Eliminar</button>
            </div>
        </Show>
    )
}