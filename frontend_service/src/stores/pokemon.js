import { defineStore } from "pinia";
import axios from "axios";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemons: [],
    loading: false,
    error: null,
    favorites: new Set(),
  }),
  actions: {
    async fetchPokemons() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        const pokemonData = await Promise.all(
          response.data.results.map((pokemon) =>
            axios.get(pokemon.url).then((res) => res.data)
          )
        );
        this.pokemons = pokemonData.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other["official-artwork"].front_default,
          types: pokemon.types.map((type) => type.type.name),
          stats: pokemon.stats,
          height: pokemon.height,
          weight: pokemon.weight,
          abilities: pokemon.abilities.map((ability) => ability.ability.name),
        }));
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    updatePokemon(updatedPokemon) {
      const index = this.pokemons.findIndex((p) => p.id === updatedPokemon.id);
      if (index !== -1) {
        this.pokemons[index] = updatedPokemon;
      }
    },
    toggleFavorite(pokemonId) {
      if (this.favorites.has(pokemonId)) {
        this.favorites.delete(pokemonId);
      } else {
        this.favorites.add(pokemonId);
      }
    },
  },
  getters: {
    filteredPokemons: (state) => (searchTerm) => {
      if (!searchTerm) return state.pokemons;
      return state.pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    isFavorite: (state) => (pokemonId) => {
      return state.favorites.has(pokemonId);
    },
  },
});
