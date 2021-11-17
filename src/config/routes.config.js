import Home from "../pages/Home.page";
import Monsters from "../pages/Monsters.page";

export const ROUTES = [
  { name: "Home", path: "/", component: Home, nav: true },
  { name: "Monsters", path: "/monsters", component: Monsters, nav: true },
];

export const NAV_ROUTES = ROUTES.filter((r) => r.nav);
