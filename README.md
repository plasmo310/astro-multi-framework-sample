# Astro Multi Framework Sample

- Astro.jsで複数UIフレームワークを使用するサンプルになります。
- 以下のフレームワークでシンプルなカウント処理を実装しています。
  - React
  - Vue
  - Svelte

## React

- `src/components/ReactCounter.tsx`

  ```
  import { useState } from "react";

  function ReactCounter() {
  const [count, setCount] = useState<number>(0);

  return (
      <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          Add
      </button>
      </div>
  );
  }
  export default ReactCounter;

  ```

## Vue

- `src/components/VueCounter.vue`

  ```
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

  ```

## Svelte

- `src/components/SvelteCounter.svelte`

  ```
  <script lang="ts">
      let count: number = 0;

      const increment = (): void => {
          count += 1;
      };
  </script>

  <div>
      <p>Count: {count}</p>
      <button type="button" on:click={increment}>Add</button>
  </div>

  ```
