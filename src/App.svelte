<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import { LNavBar } from "@ztl-uwu/labui";
</script>

<LNavBar />
<main>
  <Router {routes} />
</main>

<style>
  main {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
