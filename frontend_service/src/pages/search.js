import { ref } from "vue";

export default {
  emits: ["search"],
  setup(props, { emit }) {
    const searchTerm = ref("");

    const handleInput = () => {
      emit("search", searchTerm.value);
    };

    return {
      searchTerm,
      handleInput,
    };
  },
};
