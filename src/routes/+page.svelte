<script lang="ts">
		import type { PageData } from "./$types";


    export let data: PageData;
</script>


<h1>Welcome to your library project</h1>
<p>Device type</p>
<p>{JSON.stringify(data)}</p>
