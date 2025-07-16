import type { Frog } from "../types/frog";

export const frogs: Frog[] = [
  {
    id: 0,
    name: "Charlie",
    age: 21,
    job: "The Bayou",
    images: [
      "images/frog-brown-1.png",
      "images/frog-brown-2.jpg",
      "images/frog-brown-3.jpg",
      "images/frog-brown-4.jpg",
    ],
    distance: 4,
    description:
      "First day on this app, looking to make some awesome friends. Swipe to chat about lily pads! :D",
  },
  {
    id: 1,
    name: "Hank",
    age: 23,
    job: "Everglades",
    images: [
      "images/frog-green-1.jpg",
      "images/frog-green-2.jpg",
      "images/frog-green-3.png",
      "images/frog-green-4.jpg",
    ],
    distance: 16,
    description: "I got the goods is you know what I mean.",
  },
  {
    id: 2,
    name: "Walter",
    age: 128,
    job: "Bronx Zoo",
    images: [
      "images/frog-white-1.png",
      "images/frog-white-2.png",
      "images/frog-white-3.png",
      "images/frog-white-4.jpg",
    ],
    distance: 9,
    description:
      "Small dude with a lot of heart. I still live with my parents, grandparents, and cousins, but I hope to be let out soon!",
  },
];
