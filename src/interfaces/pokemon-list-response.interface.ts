export interface PokemonListResponse {
    next:    string;
    count:   number;
    results: Result[];
}

export interface Result {
    name: string;
    url:  string;
}
