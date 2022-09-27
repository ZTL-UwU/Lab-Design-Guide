<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";
	import { LNavBar } from "@ztl-uwu/labui";
	import {push, pop, replace} from 'svelte-spa-router'
	console.log(routes);
</script>

<LNavBar />
<main>
	<Router {routes} />
	<button on:click={() => push('/color')}>Color</button>
</main>

<style>
	main {
		max-width: 900px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 100px;
		padding-right: 100px;
	}
</style>