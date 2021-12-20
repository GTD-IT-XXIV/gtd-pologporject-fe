import image from "./assets/image.png";
import bear from "./assets/bear.png";
import bear2 from "./assets/bear2.png";

export const casefileProps = {
  CountdownProps: {
    date: "January 15, 2022 00:00:00",
    title: "case file",
    genre: "HORROR | ADVENTURE",
    CTAText: "BUY TICKET",
    image: image,
    link: "casefile/register",
  },
  TrailerProps: {
    duration: "2 hours",
    difficulty: "•••••",
    capacity: "5-7 person(s)",
    videoId: "MzznUfFGcOg",
  },
  SynopsisProps: {
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  CharacterProps: {
    pages: [
      [
        { image: bear, name: "PANDA" },
        { image: bear, name: "PANDA" },
        { image: bear, name: "PANDA" },
      ],
      [
        { image: bear2, name: "PANDe" },
        { image: bear2, name: "PANDe" },
        { image: bear2, name: "PANDe" },
      ],
      [
        { image: bear, name: "PANDO" },
        { image: bear, name: "PANDO" },
        { image: bear, name: "PANDO" },
      ],
    ],
  },
};
