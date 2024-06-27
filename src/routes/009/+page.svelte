<script lang="ts">
  import Music from "./music.svelte";
  import referencePNG from "./reference.png";
</script>

<Music />

<div class="flex items-center justify-center h-screen">
  <div
    class="relative w-[800px] h-[600px] bg-background border border-input rounded-lg shadow-lg"
  >
    <a href="https://adventuretime.fandom.com/wiki/What_Was_Missing"
      ><img
        src={referencePNG}
        alt="Reference used to design the user profile"
        width="800"
        height="600"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
        style="aspect-ratio:600/400;object-fit:cover"
      /></a
    >
  </div>
</div>
