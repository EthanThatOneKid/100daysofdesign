<script lang="ts">
  export let src = "/placeholder.svg";
  export let alt = "Placeholder alt";
  export let title = "Placeholder title";
  export let color = "transparent";

  const outline = `outline: 1px solid ${color};`;
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/y3RNq0nIri7
-->

<div class="flex flex-col items-center justify-center bg-background p-4">
  <div
    class="rounded-lg border bg-card text-card-foreground shadow-md w-full max-w-md mx-auto p-6 flex flex-col items-center justify-center text-center"
    data-v0-t="card"
    style={outline}
  >
    <img
      {src}
      {alt}
      class="rounded-md mb-6 w-full aspect-[1/1] object-cover"
      width="300"
      height="300"
      style={outline}
    />
    <div class="space-y-2">
      <h3 class="text-2xl font-bold">{title}</h3>
      <p class="text-muted-foreground"><slot /></p>
    </div>
  </div>
</div>
