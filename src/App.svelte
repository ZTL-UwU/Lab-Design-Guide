<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";
	import { LNavBar } from "@ztl-uwu/labui";
</script>

<LNavBar />
<main>
	<Router {routes} />
</main>

<style>
	main {
		max-width: 1100px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 100px;
		padding-right: 100px;
		padding-bottom: 60px;
	}
</style>