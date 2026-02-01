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
