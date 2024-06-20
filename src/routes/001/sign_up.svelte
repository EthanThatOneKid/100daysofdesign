<!--
// v0 by Vercel.
// https://v0.dev/t/MlpenDE1z4N
-->

<div
  class="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8"
>
  <div class="w-full max-w-md space-y-8">
    <div>
      <h2
        class="mt-6 text-center text-3xl font-bold tracking-tight text-foreground"
      >
        Sign up for the 100-Day Design Challenge
      </h2>
      <p class="mt-2 text-center text-sm text-muted-foreground">
        Join a community of designers and creators to level up your skills!
      </p>
    </div>
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
          for="name"
        >
          Name
        </label>
        <input
          class="h-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          id="name"
          autocomplete="name"
          required=""
          type="text"
          name="name"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
          for="email"
        >
          Email address
        </label>
        <input
          class="h-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          id="email"
          autocomplete="email"
          required=""
          placeholder="Enter your email"
          type="email"
          name="email"
        />
      </div>
      <div class="flex items-center">
        <button
          type="button"
          role="checkbox"
          aria-checked="false"
          data-state="unchecked"
          value="on"
          class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          id="terms"
        ></button>
        <input
          aria-hidden="true"
          tabindex="-1"
          type="checkbox"
          value="on"
          style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
        />
        <label
          class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2 block text-sm text-muted-foreground"
          for="terms"
        >
          I agree to the
        </label>
      </div>
    </form>
  </div>
</div>
