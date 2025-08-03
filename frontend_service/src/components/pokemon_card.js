import { useRouter } from 'vue-router';

export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-favorite'],
  setup(props, { emit }) {
    const router = useRouter()
    
    const goToPokemon = () => {
      router.push({ name: 'pokemon', params: { id: props.pokemon.id } })
    }
    
    const toggleFavorite = (pokemonId) => {
      emit('toggle-favorite', pokemonId)
    }
    
    return {
      goToPokemon,
      toggleFavorite
    }
  }
}
