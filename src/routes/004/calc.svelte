<script lang="ts">
  import type { FollowRatio } from "./github";

  export let data: FollowRatio | null;
</script>

{#if data !== null}
  <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
{:else}
  <form action="" method="get">
    <input type="search" name="username" placeholder="GitHub username" />
    <button type="submit">Submit</button>
  </form>
{/if}
