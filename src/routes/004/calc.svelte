<script lang="ts">
  import type { Operation, State } from "./calc";
  import { calc } from "./calc";

  let op: Operation | null = null;
  let state: State = "a";
  let aSign = 1;
  let a: string[] = [];
  let bSign = 1;
  let b: string[] = [];
  let answer = 0;

  function clear() {
    op = null;
    state = "a";
    a = [];
    b = [];
    answer = 0;
  }

  function addDigit(digit: string) {
    switch (state) {
      case "a": {
        a.push(digit);
        break;
      }

      case "b": {
        b.push(digit);
        break;
      }
    }
  }

  function addDecimal() {
    switch (state) {
      case "a": {
        if (!a.includes(".")) {
          a.push(".");
        }

        break;
      }

      case "b": {
        if (!b.includes(".")) {
          b.push(".");
        }

        break;
      }
    }
  }

  function toggleSign() {
    switch (state) {
      case "a": {
        aSign = -aSign;
        break;
      }

      case "b": {
        bSign = -bSign;
        break;
      }
    }
  }

  function setOperation(newOperation: Operation) {
    op = newOperation;
    state = "b";
  }

  function executeOperation() {
    if (op === null) {
      return;
    }

    const aValue = parseFloat(a.join("")) * aSign;
    const bValue = parseFloat(b.join("")) * bSign;
    a = calc(op, aValue, bValue).toString().split("");
    b = [];
    op = null;
    state = "a";
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/gh/keshikan/DSEG/css/dseg.css"
  />
</svelte:head>

<!--
// v0 by Vercel.
// https://v0.dev/t/3bU1f5fdPuu
-->

<div class="flex flex-col items-center justify-center h-screen bg-background">
  <div class="bg-card rounded-lg shadow-lg p-6 w-full max-w-md">
    <div class="bg-card-foreground rounded-md p-4 mb-4">
      <div class="text-right text-2xl font-bold text-foreground">
        {#if state === "a"}
          {a}
        {:else}
          {b}
        {/if}
      </div>
    </div>
    <div class="grid grid-cols-4 gap-3">
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
        on:click={() => clear()}
      >
        AC
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
        on:click={() => toggleSign()}
      >
        +/-
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
        on:click={() => setOperation("%")}
      >
        %
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold text-primary border rounded-md"
        on:click={() => setOperation("/")}
      >
        /
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
        on:click={() => addDigit("7")}
      >
        7
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
        on:click={() => addDigit("8")}
      >
        8
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
        on:click={() => addDigit("9")}
      >
        9
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold text-primary border rounded-md"
        on:click={() => setOperation("*")}
      >
        *
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
        on:click={() => addDigit("4")}
      >
        4
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
        on:click={() => addDigit("5")}
      >
        5
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
        on:click={() => addDigit("6")}
      >
        6
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold text-primary border rounded-md"
        on:click={() => setOperation("-")}
      >
        -
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
        on:click={() => addDigit("1")}
      >
        1
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
        on:click={() => addDigit("2")}
      >
        2
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
        on:click={() => addDigit("3")}
      >
        3
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold text-primary border rounded-md"
        on:click={() => setOperation("+")}
      >
        +
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 col-span-2 text-2xl font-bold border rounded-md"
        on:click={() => addDigit("0")}
      >
        0
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold border rounded-md"
      >
        .
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold text-primary border rounded-md"
      >
        =
      </button>
    </div>
  </div>
</div>
