<script>
  import { page } from "$app/stores";
</script>

<h1 class="text-4xl">
  {#if $page.status === 404}
    Ethan is an L bozo! 404 🤡
  {:else}
    {$page.status}
  {/if}
</h1>

<p>{$page.error?.message}</p>
