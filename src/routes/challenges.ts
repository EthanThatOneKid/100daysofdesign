// TODO: Read challenge data from individual files in respective folders.

export const challenges = [
  {
    id: 1,
    title: "Sign Up",
    description:
      "Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a party invite, contest registration, a giveaway, or anything you can image 📝 have fun with it!",
  },
  {
    id: 2,
    title: "Credit Card Checkout",
    description:
      "Design a credit card checkout form or page. Don't forget the important elements such as the numbers, dates, security numbers, etc.",
  },
  {
    id: 3,
    title: "Landing Page",
    description:
      "Today's Mission: Landing Page 🛬 What's the main focus? Is it for a book, an album, a mobile app, a SaaS product? Consider important landing page elements (Headlines, call-to-action buttons, typography, clarity, etc.)",
  },
  {
    id: 4,
    title: "Calculator",
    description:
      "Design a calculation element or interface. Is it a standard calculator, a scientific one, or specialty calculator for something such as a home mortgage or auto loan? Is it to forecast a calculation such as for a credit score? Is it for a phone, a tablet, a web app?",
  },
  {
    id: 5,
    title: "App Icon",
    description:
      "Design an app icon. What best represents the brand or product? Or is it incredibly unique? Does it look great at a distance and does it stand out when put on your home screen alongside other apps? Have fun and put your own spin into things!",
  },
  {
    id: 6,
    title: "User Profile",
    description:
      "Design a user profile and be mindful of the most important data, names, imagery, placement, etc. Is it for a serious profile? A social profile? (It's up to you!)",
  },
  {
    id: 7,
    title: "Settings",
    description:
      "Design settings for something. Is it for security or privacy settings? Game settings? Light mode vs. dark mode? System settings (sound, notifications, screen time, Wi-Fi, etc.?",
  },
  {
    id: 8,
    title: "Beach Flyer",
    description:
      "Design a flyer for a beach of your choice, whether it's in California or anywhere in the world 🌠🪼. Include information you think could attract the attention of viewers. Your main goal is to create a design that draws people in! Also, there’s a catch ~ you have to include Capy, our mascot, into your design.",
  },
  {
    id: 9,
    title: "Music Player",
    description:
      "Design a music player. It could be browser based or an app (i.e. Pandora, Spotify, SoundCloud, etc.) or in a standalone product like in a car dashboard, jukebox, etc. Consider the controls, placements, imagery such as the artist or album cover, etc. Also, consider the device type that's playing the music. A dashboard in a tour bus, a smartwatch, or via a web browser. Each device type will have different requirements, features, and restrictions to consider.",
  },
  {
    id: 10,
    title: "Book Cover",
    description:
      "Design a book cover. It can be a horror, romance, comedy, or any genre you can think of. Consider things like colors, illustration, book title, and more that makes the audience want to grab your book and read what it's about.",
  },
  {
    id: 11,
    title: "Flash Message",
    description:
      "Design a Flash Message with both the error message and success message. Is it for a sign up form? A download/upload message? Is it to promote a membership plan?",
  },
  {
    id: 12,
    title: "Poster",
    description:
      "The poster can be for anything. Is this poster for a movie? clothes? shoes? a videogame? Food??? Anything can be on the poster as long as you effectively advertise your product.",
  },
  {
    id: 13,
    title: "Festival Poster",
    description:
      "Do you have a dream music festival lineup? Complete with artists that you like & listen to! Or, are you interested in a fun-filled festival day that includes your favorite interests & hobbies? Now is your chance to design your dream Festival Poster 🎠🎟️",
  },
  {
    id: 14,
    title: "Countdown Timer",
    description:
      "Is it for an app? An interface for an oven or cooking device? A sport related countdown, such as on a scoreboard? Or is it a launch countdown for NASA, race cars, or something else?",
  },
  {
    id: 15,
    title: "On/Off Switch",
    description:
      "Today's prompt is On/Off Switch! 💡 Consider what's being turned on/off and how it should be done. Is it a push-to-start electric vehicle? A control panel for a smart refrigerator or some other touch panel display!",
  },
] satisfies DayOfDesign[];

export interface DayOfDesign {
  id: number;
  title: string;
  description: string;
}
