<script lang="ts">
  const daysOfDesign = Object.keys(
    import.meta.glob("./{001..100}/+page.svelte")
  ).map((path) => path.slice(2, 5));
</script>

<svelte:head>
  <title>100 Days of Design Challenge 🖋️</title>
  <meta
    name="description"
    content="Showcase of Ethan's #100daysofdesign challenge. Each day, he designs a new user interface, component, or layout."
  />
</svelte:head>

<section class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold">#100daysofdesign</h1>

  <p class="mt-4">
    Visit the <a
      class="underline"
      href="https://github.com/EthanThatOneKid/100daysofdesign"
      >GitHub repository</a
    > to read the source code for each design challenge.
  </p>

  <div class="grid grid-cols-1 gap-4 mt-8">
    {#each daysOfDesign as day}
      <a
        href={`/${day.toString().padStart(3, "0")}`}
        class="block p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg"
      >
        Day {day.toString().padStart(3, "0")}
      </a>
    {/each}
  </div>
</section>

<footer class="container mx-auto px-4 py-8 text-center">
  <p>
    Designed with <a href="https://acmcsuf.com/teams#design"
      ><img
        alt="Design Love"
        src="https://cdn.discordapp.com/emojis/1202363342845640744.webp?size=24&quality=lossless"
        class="inline"
      /></a
    >
    by
    <a href="https://etok.codes" class="underline font-bold">@EthanThatOneKid</a
    >
  </p>
</footer>
