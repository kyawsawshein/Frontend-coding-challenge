import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { usePokemonStore } from "../stores/pokemon";

export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props) {
    const pokemonStore = usePokemonStore();
    const route = useRoute();

    const editablePokemon = ref({
      id: null,
      name: "",
      height: 0,
      weight: 0,
    });

    const pokemon = computed(() => {
      const found = pokemonStore.pokemons.find(
        (p) => p.id === parseInt(props.id)
      );
      if (found) {
        editablePokemon.value = {
          id: found.id,
          name: found.name,
          height: found.height / 10,
          weight: found.weight / 10,
        };
      }
      return found;
    });

    const loading = computed(() => pokemonStore.loading);
    const error = computed(() => pokemonStore.error);

    onMounted(() => {
      if (pokemonStore.pokemons.length === 0) {
        pokemonStore.fetchPokemons();
      }
    });

    const toggleFavorite = (pokemonId) => {
      pokemonStore.toggleFavorite(pokemonId);
    };

    const isFavorite = (pokemonId) => {
      return pokemonStore.isFavorite(pokemonId);
    };

    const handleSubmit = () => {
      const updatedPokemon = {
        ...pokemon.value,
        name: editablePokemon.value.name,
        height: editablePokemon.value.height * 10,
        weight: editablePokemon.value.weight * 10,
      };
      pokemonStore.updatePokemon(updatedPokemon);
    };

    return {
      pokemon,
      loading,
      error,
      editablePokemon,
      toggleFavorite,
      isFavorite,
      handleSubmit,
    };
  },
};
