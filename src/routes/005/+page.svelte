<script lang="ts">
  import lavaLampAppIconPNG from "./lava_lamp_app_icon.png";
  import lavaLampAppIconSVG from "./lava_lamp_app_icon.svg";
</script>

<svelte:head>
  <title>#005 — 100 Days of Design Challenge 🖋️</title>
  <meta
    name="description"
    content="Design an app icon. What best represents the brand or product? Or is it incredibly unique? Does it look great at a distance and does it stand out when put on your home screen alongside other apps? Have fun and put your own spin into things!"
  />
</svelte:head>

<!--
// v0 by Vercel.
// https://v0.dev/t/kFlcAUCh3BC
-->

<div class="flex items-center justify-center h-screen">
  <div
    class="relative w-[600px] h-[600px] bg-background border border-input rounded-lg shadow-lg"
  >
    <img
      src={lavaLampAppIconPNG}
      alt="Lava Lamp App Icon PNG"
      width="600"
      height="600"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
      style="aspect-ratio:600/400;object-fit:cover"
    />
  </div>
</div>

<div class="flex items-center justify-center h-screen">
  <div
    class="relative w-[600px] h-[600px] bg-background border border-input rounded-lg shadow-lg"
  >
    <img
      src={lavaLampAppIconSVG}
      alt="Lava Lamp App Icon SVG"
      width="600"
      height="600"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
      style="aspect-ratio:600/400;object-fit:cover"
    />
  </div>
</div>
