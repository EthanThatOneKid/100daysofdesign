<script lang="ts">
  import circuitSVG from "./circuit.svg";

  const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];

  let audioCtx: AudioContext | null = null;
  let recentNote: string | null = null;

  function handleMouseEvent(event: MouseEvent) {
    // Proceed if the user is clicking on the screen.
    if (event.buttons !== 1) {
      return;
    }

    if (!audioCtx) {
      audioCtx = new AudioContext();
    }

    const percentage =
      event.clientX / (event.target as HTMLDivElement).clientWidth;
    playNote(percentage);
  }

  function playNote(percentage: number) {
    const index = Math.floor(percentage * notes.length);
    const note = notes[index];
    recentNote = note;

    if (note && audioCtx) {
      const oscillator = audioCtx.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(
        getFrequency(note),
        audioCtx.currentTime
      );

      const gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); // Adjust volume

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.2); // Adjust duration
    }
  }

  function getFrequency(note: string) {
    const octave = parseInt(note.slice(-1));
    const baseNote = note.slice(0, -1);
    let frequency = 0;

    switch (baseNote) {
      case "C":
        frequency = 261.63;
        break;
      case "D":
        frequency = 293.66;
        break;
      case "E":
        frequency = 329.63;
        break;
      case "F":
        frequency = 349.23;
        break;
      case "G":
        frequency = 392;
        break;
      case "A":
        frequency = 440;
        break;
      case "B":
        frequency = 493.88;
        break;
    }

    return frequency * Math.pow(2, octave - 4);
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="__className_aaf875"
  style:background-image="url({circuitSVG})"
  on:mousemove={handleMouseEvent}
>
  <div class="bmo_screen__jgxgK">
    <div class="bmo_face__I_Ksk">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        ><circle
          cx="33"
          cy="30"
          r="2"
          fill="black"
          data-darkreader-inline-fill=""
          style="--darkreader-inline-fill: #e7e6e5;"
        ></circle><circle
          cx="66"
          cy="30"
          r="2"
          fill="black"
          data-darkreader-inline-fill=""
          style="--darkreader-inline-fill: #e7e6e5;"
        ></circle><path
          d="M 35 45 Q 50 55 65 45"
          stroke="black"
          stroke-width="2"
          fill="transparent"
          stroke-linecap="round"
          data-darkreader-inline-stroke=""
          style="--darkreader-inline-stroke: #e7e6e5; --darkreader-inline-fill: transparent;"
          data-darkreader-inline-fill=""
        ></path>

        <text x="50" y="80" text-anchor="middle" font-size="10"
          >{#if recentNote}BMO sings {recentNote}{:else}Headphone warning!{/if}</text
        >
      </svg>
    </div>
  </div>
</div>

<style>
  .__className_aaf875 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    user-select: none;
  }

  .bmo_screen__jgxgK {
    width: min(600px, 100%);
    height: 400px;
    background-color: #bffecb;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0.5rem solid #589c85;
    @media (max-width: 600px) {
      margin-top: -50vh;
    }
  }

  .bmo_face__I_Ksk svg {
    width: 100%;
    height: 100%;
  }
</style>
