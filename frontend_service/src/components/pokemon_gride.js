import PokemonCard from "src/components/pokemon_card.js";

export default {
  components: {
    PokemonCard,
  },
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
    isFavorite: {
      type: Function,
      required: true,
    },
  },
  emits: ["toggle-favorite"],
  setup(props, { emit }) {
    const toggleFavorite = (pokemonId) => {
      emit("toggle-favorite", pokemonId);
    };

    return {
      toggleFavorite,
    };
  },
};
