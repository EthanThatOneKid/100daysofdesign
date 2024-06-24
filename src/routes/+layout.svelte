<script lang="ts">
  import { page } from "$app/stores";
  import { challenges } from "./challenges";
  import "../app.css";

  const titleSuffix = "100 Days of Design Challenge 🖋️";
  $: id = parseInt($page.url.pathname.split("/")?.[1]);
  $: challenge = challenges.find((c) => c.id === id);
  $: previous = challenges.find((c) => c.id === id - 1);
  $: next = challenges.find((c) => c.id === id + 1);

  function makeURL(id: number): string {
    return `/${id.toString().padStart(3, "0")}`;
  }
</script>

<svelte:head>
  {#if challenge !== undefined}
    <title>#{challenge.id} — {titleSuffix}</title>
    <meta name="description" content={challenge.description} />
  {:else}
    <title>{titleSuffix}</title>
    <meta
      name="description"
      content="Showcase of Ethan's #100daysofdesign challenge. Each day, he designs a new user interface, component, or layout for the ACM at CSUF Design Team's 100 Days of Design Challenge 2024!"
    />
  {/if}
</svelte:head>

{#if challenge !== undefined}
  <header class="bg-gray-100 py-4">
    <p class="text-left container mx-auto px-4 py-8">
      {#if $page.url.pathname !== "/"}
        <a href="/" class="underline">Home</a>
      {/if}

      {#if previous !== undefined}
        <a href={makeURL(previous.id)} class="underline">Previous</a>
      {/if}

      {#if next !== undefined}
        <a href={makeURL(next.id)} class="underline">Next</a>
      {/if}

      <br />

      #{challenge.id} — <strong>{challenge.title}</strong>
      <br />
      {challenge.description}
    </p>
  </header>
{/if}

<slot></slot>

<footer class="bg-gray-200 py-4">
  <div class="container mx-auto px-4 py-8 text-center">
    <p>
      Designed with
      <a href="https://acmcsuf.com/teams#design"
        ><img
          alt="Design Love"
          src="https://cdn.discordapp.com/emojis/1202363342845640744.webp?size=24&quality=lossless"
          class="inline"
        /></a
      >
      by
      <a href="https://etok.codes/" class="underline font-bold"
        >@EthanThatOneKid</a
      >
    </p>
  </div>
</footer>

<style></style>
