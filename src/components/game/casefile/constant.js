import image from "./assets/image.gif";
import orang1 from "./assets/Case-File-CharacterArtboard-1.png";
import orang2 from "./assets/Case-File-CharacterArtboard-2.png";
import orang3 from "./assets/Case-File-CharacterArtboard-3.png";

export const casefileProps = {
  CountdownProps: {
    date: "January 15, 2022 00:00:00",
    title: "misfortune",
    genre: "MYSTERY",
    CTAText: "BUY TICKET",
    image: image,
    link: "casefile/registration",
  },
  TrailerProps: {
    duration: "2 hours",
    difficulty: "••••",
    capacity: "5 person(s)",
    videoId: "6ihbNSM59E0",
  },
  SynopsisProps: {
    synopsis:
      "On one night, the children of a retired business owner of a multimillion dollar company came to visit their parents at home for a family dinner. It was a very warm and comforting night, until the police received a call at midnight. There mourns a family, upon an unfortunate passing of the retired business owner, a father of two, a beloved husband, and a great leader. The burden is bestowed on, YOU,  the newly recruited police officers, will you be able to find the clues to trace the murderer amongst the suspects, and bring closure to the family that was left behind?",
  },
  CharacterProps: {
    pages: [
      [
        { image: orang3, name: "Huang Yongfei" },
        { image: orang1, name: "Siti" },
        { image: orang2, name: "Huang Yixiang" },
      ],
    ],
  },
};
