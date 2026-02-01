<script lang="ts" setup>
import { computed, ref } from "vue";

const count = ref<number>(0);
const doubled = computed(() => count.value * 2);

const increment = (): void => {
  count.value += 1;
};

const reset = (): void => {
  count.value = 0;
};
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Doubled: {{ doubled }}</p>
    <button type="button" @click="increment">Add</button>
    <button type="button" @click="reset">Reset</button>
  </div>
</template>
