import Home from "./components/home";
import Registration from "./components/registration";

export const routes = [
  {
    id: 1,
    name: "Home",
    component: <Home />,
    path: "/",
  },
  {
    id: 2,
    name: "Registration",
    component: <Registration />,
    path: "/registration",
  },
];
