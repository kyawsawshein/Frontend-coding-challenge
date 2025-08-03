import { computed, onMounted } from "vue";
import { usePokemonStore } from "../stores/pokemon";
import SearchBar from "../components/SearchBar.vue";
import PokemonGrid from "../components/PokemonGrid.vue";

export default {
  components: {
    SearchBar,
    PokemonGrid,
  },
  setup() {
    const pokemonStore = usePokemonStore();

    onMounted(() => {
      if (pokemonStore.pokemons.length === 0) {
        pokemonStore.fetchPokemons();
      }
    });

    const handleSearch = (searchTerm) => {
      pokemonStore.searchTerm = searchTerm;
    };

    const toggleFavorite = (pokemonId) => {
      pokemonStore.toggleFavorite(pokemonId);
    };

    return {
      loading: computed(() => pokemonStore.loading),
      error: computed(() => pokemonStore.error),
      filteredPokemons: computed(() =>
        pokemonStore.filteredPokemons(pokemonStore.searchTerm)
      ),
      isFavorite: (pokemonId) => pokemonStore.isFavorite(pokemonId),
      handleSearch,
      toggleFavorite,
    };
  },
};
