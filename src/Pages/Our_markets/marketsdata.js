import {
  Factory,
  Pill,
  Utensils,
  Droplet,
  Settings,
  Building2,
} from "lucide-react";

import Texttile from  "../../images/Textile.png"
import Pharma from  "../../images/pharma.png"
import foodAndbev from  "../../images/foodandbev.png"
import Oil from  "../../images/oilandgas.png"
import Machinemanu from  "../../images/Machine_manu.png"
import Infra from  "../../images/Infrastructure.png"


export const marketsData = [
  {
    id: "textile",
    name: "Textile",
    image: Texttile,
    route: "/projects/textile",
    icon: Factory,
    projects: 28,
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
    image:Pharma,
    route: "/projects/pharmaceutical",
    icon: Pill,
    projects: 19,
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    image:foodAndbev,
    route: "/projects/food-beverage",
    icon: Utensils,
    projects: 22,
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    image: Oil,
    route: "/projects/oil-gas",
    icon: Droplet,
    projects: 14,
  },
   {
    id: "manufacturing",
    name: "Machine Manufacturing",
    image:Machinemanu,
    route: "/projects/manufacturing",
    icon: Settings,
    projects: 31,
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    image:Infra,
    route: "/projects/infrastructure",
    icon: Building2,
    projects: 17,
  },
];
