import Home from "../pages/Home.page";
import Monsters from "../pages/Monsters.page";
import Collection from "../pages/Collection.page";

export const ROUTES = [
  { name: "Home", path: "/", component: Home, nav: true },
  { name: "Monsters", path: "/monsters", component: Monsters, nav: true },
  { name: "Collection", path: "/collection", component: Collection, nav: true },
];

export const NAV_ROUTES = ROUTES.filter((r) => r.nav);
