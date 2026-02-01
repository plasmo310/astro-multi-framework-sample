<script lang="ts" setup>
import { ref } from "vue";

const count = ref<number>(0);

const increment = (): void => {
  count.value += 1;
};
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button type="button" @click="increment">Add</button>
  </div>
</template>
