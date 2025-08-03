<template>
  <div class="search-bar mb-4">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Search Pokémon..."
        v-model="searchTerm"
        @input="handleInput"
      />
      <span class="input-group-text">
        <i class="bi bi-search"></i>
      </span>
    </div>
  </div>
</template>

<script>
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
</script>

<style scoped>
.search-bar {
  max-width: 500px;
  margin: 0 auto;
}
</style>
