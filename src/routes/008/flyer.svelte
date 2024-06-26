<script lang="ts">
  import redwoodGroveJPG from "./redwood-grove.jpg";
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/sBdexvzM4nE
-->

<div
  class="w-full h-[600px] flex flex-col items-center justify-center"
  style={`background: url('${redwoodGroveJPG}') center/cover`}
>
  <div
    class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8"
  >
    <div class="flex-1">
      <img
        src="https://acmcsuf.com/assets/capy-power.svg"
        width="400"
        height="400"
        alt="Forest Creature"
        class="w-full max-w-[300px] mx-auto"
        style="aspect-ratio:400/400;object-fit:cover"
      />
    </div>
    <div class="flex-1 space-y-6">
      <div class="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <div>
          <h1 class="text-4xl font-bold text-[#2C3E50]">Redwood Grove Hike</h1>
          <p class="text-lg text-[#7F8C8D]">
            Join the Open Source Software team for an unforgettable adventure
            through Redwood Grove at Carbon Canyon Regional Park.
          </p>
        </div>

        <h2 class="text-2xl font-bold text-[#2C3E50] mb-4">Event Details</h2>
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 text-[#7F8C8D]"
              data-darkreader-inline-stroke=""
              style="--darkreader-inline-stroke: currentColor;"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <p class="text-[#7F8C8D]">Sunday, June 30th, 2024</p>
          </div>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 text-[#7F8C8D]"
              data-darkreader-inline-stroke=""
              style="--darkreader-inline-stroke: currentColor;"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <p class="text-[#7F8C8D]">10:00 AM - 2:00 PM</p>
          </div>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 text-[#7F8C8D]"
              data-darkreader-inline-stroke=""
              style="--darkreader-inline-stroke: currentColor;"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p class="text-[#7F8C8D]">
              <a
                href="https://www.ocparks.com/parks-trails/carbon-canyon-regional-park"
                class="text-primary-foreground"
                >Redwood Grove, Carbon Canyon Regional Park</a
              >
            </p>
          </div>
        </div>
      </div>
      <a
        href="https://discord.gg/a5CcFGDj?event=1255303838735532073"
        class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-[#27AE60] text-white hover:bg-[#2ECC71] transition-colors"
      >
        Join the Hike
      </a>
    </div>
  </div>
</div>
