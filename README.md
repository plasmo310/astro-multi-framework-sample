# Astro Multi Framework Sample

- Astro.jsで複数UIフレームワークを使用するサンプルになります。
- 以下のフレームワークでシンプルなカウント処理を実装しています。
  - React
  - Vue
  - Svelte

## Main

- `src/pages/index.astro`

  ```
  ---
  import ReactCounter from "../components/ReactCounter";
  import VueCounter from "../components/VueCounter.vue";
  import SvelteCounter from "../components/SvelteCounter.svelte";
  ---
  
  <html lang="en">
  	<head>
  		<meta charset="utf-8" />
  		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  		<link rel="icon" href="/favicon.ico" />
  		<meta name="viewport" content="width=device-width" />
  		<meta name="generator" content={Astro.generator} />
  		<title>Multiple UI Framework Sample</title>
  	</head>
  	<body>
  		<h1>Multiple Framework Sample</h1>
  		<h2>React</h2>
  		<ReactCounter client:load />
  		<h2>Vue</h2>
  		<VueCounter client:load />
  		<h2>Svelte</h2>
  		<SvelteCounter client:load />
  	</body>
  </html>
  ```

## React

- `src/components/ReactCounter.tsx`

  ```
    import { useState } from "react";

    function ReactCounter() {
    const [count, setCount] = useState<number>(0);
    const doubled = count * 2;

    return (
        <div>
        <p>Count: {count}</p>
        <p>Doubled: {doubled}</p>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
            Add
        </button>
        <button type="button" onClick={() => setCount(0)}>
            Reset
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

  ```

## Svelte

- `src/components/SvelteCounter.svelte`

  ```
    <script lang="ts">
        let count = 0;
        $: doubled = count * 2;

        function increment(): void {
            count += 1;
        }

        function reset(): void {
            count = 0;
        }
    </script>

    <div>
        <p>Count: {count}</p>
        <p>Doubled: {doubled}</p>
        <button type="button" on:click={increment}>Add</button>
        <button type="button" on:click={reset}>Reset</button>
    </div>

  ```
