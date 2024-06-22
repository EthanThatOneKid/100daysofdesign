<script lang="ts">
  import { onMount } from "svelte";
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
        a = [...a, digit];
        break;
      }

      case "b": {
        b = [...b, digit];
        break;
      }
    }
  }

  function addDecimal() {
    switch (state) {
      case "a": {
        if (!a.includes(".")) {
          a = [...a, "."];
        }

        break;
      }

      case "b": {
        if (!b.includes(".")) {
          b = [...b, "."];
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

  function evaluate() {
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

  function renderState(sign: number, digits: string[]) {
    if (digits.length === 0) {
      return "&nbsp;";
    }

    let result = "";
    if (sign === -1) {
      result += "-";
    }

    if (digits.at(0) === ".") {
      result += "0";
    }

    return result + digits.join("");
  }

  function handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        addDigit(event.key);
        break;
      }

      case ".": {
        addDecimal();
        break;
      }

      case "+":
      case "-":
      case "*":
      case "/": {
        setOperation(event.key as Operation);
        break;
      }

      case "Enter": {
        evaluate();
        break;
      }

      case "Escape": {
        clear();
        break;
      }
    }
  }

  onMount(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/gh/EthanThatOneKid/DSEG/css/dseg.css"
  />
</svelte:head>

<!--
// v0 by Vercel.
// https://v0.dev/t/3bU1f5fdPuu
-->

<div
  class="flex flex-col items-center justify-center h-screen bg-background dark:bg-background-dark"
>
  <div
    class="bg-card rounded-lg shadow-lg p-6 w-full max-w-md dark:bg-card-dark"
  >
    <div
      class="bg-card-foreground rounded-md p-4 mb-4 dark:bg-card-foreground-dark"
    >
      <div
        class="text-right text-2xl font-bold text-foreground dark:text-foreground-dark"
        style="font-family: 'DSEG7-Classic', monospace;"
      >
        {@html state === "a" ? renderState(aSign, a) : renderState(bSign, b)}
      </div>
    </div>
    <div class="grid grid-cols-4 gap-3">
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
        on:click={() => clear()}
      >
        AC
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
        on:click={() => toggleSign()}
      >
        +/-
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
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
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
        on:click={() => addDigit("7")}
      >
        7
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
        on:click={() => addDigit("8")}
      >
        8
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
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
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
        on:click={() => addDigit("4")}
      >
        4
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
        on:click={() => addDigit("5")}
      >
        5
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
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
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
        on:click={() => addDigit("1")}
      >
        1
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
        on:click={() => addDigit("2")}
      >
        2
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
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
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-2xl font-bold border rounded-md hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted-dark dark:hover:text-muted-foreground-dark active:bg-muted/50 dark:active:bg-muted-dark/50"
        on:click={() => addDecimal()}
      >
        .
      </button>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-2xl font-bold text-primary border rounded-md"
        on:click={() => evaluate()}
      >
        =
      </button>
    </div>
  </div>
</div>
