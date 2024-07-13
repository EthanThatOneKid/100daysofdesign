<!--
// v0 by Vercel.
// https://v0.dev/t/IEK57G9N6hy
-->

<div class="flex flex-col min-h-screen bg-background text-foreground">
  <header
    class="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-background border-b md:px-6"
  >
    <a class="flex items-center gap-2 font-bold text-lg" href="#">
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
        class="w-6 h-6"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
        ></path>
      </svg>
      <span>Delicious Recipes</span>
    </a>
    <div class="relative flex-1 max-w-md md:ml-6">
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
        class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <input
        class="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full pl-10 rounded-md"
        placeholder="Search recipes..."
        type="search"
      />
    </div>
    <div class="hidden md:flex items-center gap-4">
      <a
        class="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        href="#"
      >
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
          class="w-5 h-5"
        >
          <path
            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
          ></path>
        </svg>
        <span>Favorites</span>
      </a>
      <a
        class="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        href="#"
      >
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
          class="w-5 h-5"
        >
          <line x1="8" x2="21" y1="6" y2="6"></line>
          <line x1="8" x2="21" y1="12" y2="12"></line>
          <line x1="8" x2="21" y1="18" y2="18"></line>
          <line x1="3" x2="3.01" y1="6" y2="6"></line>
          <line x1="3" x2="3.01" y1="12" y2="12"></line>
          <line x1="3" x2="3.01" y1="18" y2="18"></line>
        </svg>
        <span>Shopping List</span>
      </a>
    </div>
  </header>
  <main class="flex-1">
    <section class="py-8 md:py-12">
      <div class="container px-4 md:px-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold">Featured Recipes</h2>
          <a class="text-primary hover:underline" href="#"> View All </a>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm group"
            data-v0-t="card"
          >
            <a class="block" href="#">
              <img
                src="/placeholder.svg"
                alt="Recipe Image"
                width="400"
                height="300"
                class="w-full h-48 object-cover rounded-t-md group-hover:opacity-80 transition-opacity"
                style="aspect-ratio: 400 / 300; object-fit: cover;"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold">Creamy Garlic Pasta</h3>
                <p class="text-muted-foreground text-sm line-clamp-2">
                  A delicious and easy-to-make pasta dish with a creamy garlic
                  sauce.
                </p>
              </div>
            </a>
            <div class="p-6 px-4 pb-4 flex items-center justify-between">
              <div class="text-muted-foreground text-sm">Dinner</div>
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 text-muted-foreground hover:bg-muted/50 rounded-full"
              >
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
                  class="w-5 h-5"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
                <span class="sr-only">Add to Favorites</span>
              </button>
            </div>
          </div>
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm group"
            data-v0-t="card"
          >
            <a class="block" href="#">
              <img
                src="/placeholder.svg"
                alt="Recipe Image"
                width="400"
                height="300"
                class="w-full h-48 object-cover rounded-t-md group-hover:opacity-80 transition-opacity"
                style="aspect-ratio: 400 / 300; object-fit: cover;"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold">Blueberry Pancakes</h3>
                <p class="text-muted-foreground text-sm line-clamp-2">
                  Fluffy pancakes filled with juicy blueberries, perfect for
                  breakfast.
                </p>
              </div>
            </a>
            <div class="p-6 px-4 pb-4 flex items-center justify-between">
              <div class="text-muted-foreground text-sm">Breakfast</div>
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 text-muted-foreground hover:bg-muted/50 rounded-full"
              >
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
                  class="w-5 h-5"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
                <span class="sr-only">Add to Favorites</span>
              </button>
            </div>
          </div>
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm group"
            data-v0-t="card"
          >
            <a class="block" href="#">
              <img
                src="/placeholder.svg"
                alt="Recipe Image"
                width="400"
                height="300"
                class="w-full h-48 object-cover rounded-t-md group-hover:opacity-80 transition-opacity"
                style="aspect-ratio: 400 / 300; object-fit: cover;"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold">
                  Grilled Salmon with Lemon Dill Sauce
                </h3>
                <p class="text-muted-foreground text-sm line-clamp-2">
                  A healthy and flavorful salmon dish with a bright lemon dill
                  sauce.
                </p>
              </div>
            </a>
            <div class="p-6 px-4 pb-4 flex items-center justify-between">
              <div class="text-muted-foreground text-sm">Dinner</div>
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 text-muted-foreground hover:bg-muted/50 rounded-full"
              >
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
                  class="w-5 h-5"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
                <span class="sr-only">Add to Favorites</span>
              </button>
            </div>
          </div>
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm group"
            data-v0-t="card"
          >
            <a class="block" href="#">
              <img
                src="/placeholder.svg"
                alt="Recipe Image"
                width="400"
                height="300"
                class="w-full h-48 object-cover rounded-t-md group-hover:opacity-80 transition-opacity"
                style="aspect-ratio: 400 / 300; object-fit: cover;"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold">Chocolate Chip Cookies</h3>
                <p class="text-muted-foreground text-sm line-clamp-2">
                  Classic homemade chocolate chip cookies, perfect for any
                  occasion.
                </p>
              </div>
            </a>
            <div class="p-6 px-4 pb-4 flex items-center justify-between">
              <div class="text-muted-foreground text-sm">Dessert</div>
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 text-muted-foreground hover:bg-muted/50 rounded-full"
              >
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
                  class="w-5 h-5"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
                <span class="sr-only">Add to Favorites</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-8 md:py-12 bg-muted">
      <div class="container px-4 md:px-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold">Browse by Category</h2>
        </div>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <a
            class="flex flex-col items-center gap-2 p-4 rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            href="#"
          >
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
              class="w-8 h-8"
            >
              <circle cx="12" cy="13" r="8"></circle>
              <path d="M12 9v4l2 2"></path>
              <path d="M5 3 2 6"></path>
              <path d="m22 6-3-3"></path>
              <path d="M6.38 18.7 4 21"></path>
              <path d="M17.64 18.67 20 21"></path>
            </svg>
            <span class="text-sm font-medium">Breakfast</span>
          </a>
          <a
            class="flex flex-col items-center gap-2 p-4 rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            href="#"
          >
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
              class="w-8 h-8"
            >
              <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"></path>
              <path
                d="M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"
              ></path>
              <path d="m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"></path>
              <path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"
              ></path>
            </svg>
            <span class="text-sm font-medium">Lunch</span>
          </a>
          <a
            class="flex flex-col items-center gap-2 p-4 rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            href="#"
          >
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
              class="w-8 h-8"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <span class="text-sm font-medium">Dinner</span>
          </a>
          <a
            class="flex flex-col items-center gap-2 p-4 rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            href="#"
          >
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
              class="w-8 h-8"
            >
              <circle cx="12" cy="4" r="2"></circle>
              <path
                d="M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"
              ></path>
              <path d="M3.2 14.8a9 9 0 0 0 17.6 0"></path>
            </svg>
            <span class="text-sm font-medium">Dessert</span>
          </a>
          <a
            class="flex flex-col items-center gap-2 p-4 rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            href="#"
          >
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
              class="w-8 h-8"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <span class="text-sm font-medium">Appetizer</span>
          </a>
          <a
            class="flex flex-col items-center gap-2 p-4 rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            href="#"
          >
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
              class="w-8 h-8"
            >
              <path
                d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"
              ></path>
              <path d="M10 22 9 8"></path>
              <path d="m14 22 1-14"></path>
              <path
                d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
              ></path>
            </svg>
            <span class="text-sm font-medium">Snack</span>
          </a>
        </div>
      </div>
    </section>
  </main>
  <footer class="bg-muted border-t">
    <div
      class="container px-4 py-6 md:px-6 flex flex-col md:flex-row items-center justify-between"
    >
      <p class="text-sm text-muted-foreground">
        © 2024 Delicious Recipes. All rights reserved.
      </p>
      <div class="flex items-center gap-4 mt-4 md:mt-0">
        <a class="text-muted-foreground hover:text-foreground" href="#">
          About
        </a>
        <a class="text-muted-foreground hover:text-foreground" href="#">
          Contact
        </a>
        <a class="text-muted-foreground hover:text-foreground" href="#">
          Privacy
        </a>
      </div>
    </div>
  </footer>
</div>
