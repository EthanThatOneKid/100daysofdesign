<script lang="ts">
  import type { FollowRatio } from "./github";

  export let data: FollowRatio | null;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/gh/EthanThatOneKid/thelcars/assets/lcars-ultra-classic.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/gh/EthanThatOneKid/thelcars/assets/lcars-colors.css"
  />
  <script
    src="https://cdn.jsdelivr.net/gh/EthanThatOneKid/thelcars/assets/lcars.js"
  ></script>
</svelte:head>

{#if data !== null}
  <div class="data-cascade" id="niagara">
    {#each JSON.stringify(data, null, 2).split("\n") as line, i}
      <div class="row-{(i % 8) + 1}">{line}</div>
    {/each}
  </div>
{:else}
  <form action="" method="get">
    <input type="search" name="username" placeholder="GitHub username" />
    <button type="submit">Submit</button>
  </form>
{/if}
