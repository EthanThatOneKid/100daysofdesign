<script lang="ts">
  import type { PageData } from "./$types";
  import Calc from "./calc.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>#004 — 100 Days of Design Challenge 🖋️</title>
  <meta
    name="description"
    content="Design a calculation element or interface. Is it a standard calculator, a scientific one, or specialty calculator for something such as a home mortgage or auto loan? Is it to forecast a calculation such as for a credit score? Is it for a phone, a tablet, a web app?"
  />
</svelte:head>

<Calc data={data.followRatio} />
