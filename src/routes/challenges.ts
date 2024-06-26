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
] satisfies DayOfDesign[];

export interface DayOfDesign {
  id: number;
  title: string;
  description: string;
}
