<script lang="ts">
  import { onMount } from "svelte";

  let minutes = 5;
  let seconds = 0;

  onMount(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          return;
        }

        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
    }, 1e3);

    return () => clearInterval(interval);
  });
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/3HzOeXWeHOf
-->

<div
  id="container"
  class="flex flex-col items-center justify-center min-h-screen"
>
  <div
    class="relative w-full max-w-4xl p-4 border-4 border-black rounded-lg bg-blue-700 bg-opacity-50"
  >
    <div
      class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 w-12 h-6 rounded-full"
    ></div>
    <div class="flex justify-between">
      <div class="flex flex-col items-center justify-center">
        <img
          src="https://archives.bulbagarden.net/media/upload/thumb/2/23/Dawn_Contest_debut.png/594px-Dawn_Contest_debut.png"
          alt="Contestant 1"
          class="w-32 h-40 bg-white border-4 border-black"
          width="120"
          height="150"
          style="aspect-ratio: 120 / 150; object-fit: cover;"
        />
        <div
          class="flex items-center justify-center mt-4 bg-white border-4 border-black rounded-full w-28 h-28"
        >
          <div class="w-24 h-24 bg-yellow-300 rounded-full"></div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <img
          src="https://archives.bulbagarden.net/media/upload/9/90/ZoeyJubilife.png"
          alt="Contestant 2"
          class="w-32 h-40 bg-white border-4 border-black"
          width="120"
          height="150"
          style="aspect-ratio: 120 / 150; object-fit: cover;"
        />
        <div
          class="flex items-center justify-center mt-4 bg-white border-4 border-black rounded-full w-28 h-28"
        >
          <div class="w-24 h-24 bg-yellow-300 rounded-full"></div>
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-black text-yellow-400 text-4xl font-bold px-4 py-2 rounded-lg"
    >
      {minutes.toString().padStart(2, "0")}:{seconds
        .toString()
        .padStart(2, "0")}
    </div>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 w-12 h-12 rounded-full border-4 border-black"
    ></div>
  </div>
</div>

<style lang="postcss">
  #container {
    background: url(https://archives.bulbagarden.net/media/upload/1/14/Aqua_Ribbon.png)
      center center / cover;
  }
</style>
