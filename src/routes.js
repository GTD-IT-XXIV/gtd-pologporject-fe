import Home from "./components/home";
import CFRegistration from "./components/registration/casefile";
import HRegistration from "./components/registration/heist";
import ERRegistration from "./components/registration/escaperoom";
import Promo from "./components/promo";
import CFGame from "./components/game/casefile";
import HGame from "./components/game/heist";
import ERGame from "./components/game/escaperoom";
import ComingSoon from "./components/common/comingsoon";

export const routes = [
  {
    id: 1,
    name: "Home",
    component: <Home />,
    path: "/",
  },
  {
    id: 2,
    name: "Case File Registration",
    component: <CFRegistration />,
    path: "/casefile/registration",
  },
  {
    id: 3,
    name: "Heist Registration",
    component: <HRegistration />,
    path: "/heist/registration",
  },
  {
    id: 4,
    name: "Escape Room Registration",
    component: <ERRegistration />,
    path: "/escaperoom/registration",
  },
  {
    id: 5,
    name: "Promo",
    component: <Promo />,
    path: "/promotion",
  },
  {
    id: 6,
    name: "Case File Game",
    component: <CFGame />,
    path: "/casefile",
  },
  {
    id: 7,
    name: "Heist Game",
    component: <HGame />,
    path: "/heist",
  },
  {
    id: 8,
    name: "Escape Room Game",
    component: <ERGame />,
    path: "/escaperoom",
  },
  {
    id: 9,
    name: "Coming Soon",
    component: <ComingSoon></ComingSoon>,
    path: "/comingsoon",
  },
];
