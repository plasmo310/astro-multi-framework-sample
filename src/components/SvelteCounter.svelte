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
