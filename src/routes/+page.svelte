<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	onMount(() => {
		console.log(data);
	});
</script>

<h1>Welcome to your library project</h1>
<p>Device type</p>
<p>{JSON.stringify(data)}</p>
