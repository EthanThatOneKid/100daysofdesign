<script lang="ts">
  import redwoodGroveJPG from "./redwood-grove.jpg";
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/3n1HwFTqhmb
-->

<div class="w-full max-w-[1000px] mx-auto p-6 md:p-10 mb-0">
  <div class="relative h-[500px] md:h-[600px] overflow-hidden rounded-xl">
    <img
      src={redwoodGroveJPG}
      alt="Redwood Grove"
      width="1000"
      height="600"
      class="w-full h-full object-cover"
      style="aspect-ratio: 1000 / 600; object-fit: cover;"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]"
    ></div>
    <div
      class="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col items-center justify-end text-center text-white"
      style="width: 80ch;"
    >
      <div>
        <img
          src="https://acmcsuf.com/assets/capy-lucky.png"
          alt="Mascot"
          width="200"
          height="200"
        />
      </div>

      <h1 class="text-3xl md:text-4xl font-bold mb-2">Redwood Grove Hike</h1>
      <p class="text-lg md:text-xl mb-4">
        Join the Open Source Software team for a serene and rejuvenating hike
        through the towering Redwood Grove.
      </p>
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div
          class="bg-green-500 px-4 py-2 rounded-md text-primary-foreground text-sm md:text-base"
        >
          <a href="https://discord.gg/a5CcFGDj?event=1255303838735532073"
            >Sunday June 30th, 2024 - 10:00 AM</a
          >
        </div>
        <div
          class="bg-green-500 px-4 py-2 rounded-md text-primary-foreground text-sm md:text-base"
        >
          <a
            href="https://www.ocparks.com/parks-trails/carbon-canyon-regional-park"
            class="text-primary-foreground"
            >Redwood Grove, Carbon Canyon Regional Park</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
