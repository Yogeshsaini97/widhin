import {
  Factory,
  Pill,
  Utensils,
  Droplet,
  Settings,
  Building2,
  Shield,
  Car,
  Battery,
  Hammer,
  Landmark,
  Wind,
} from "lucide-react";

/* Existing images */
import Textile from "../../images/Textile.png";
import Pharma from "../../images/pharma.png";
import FoodAndBev from "../../images/foodandbev.png";
import Oil from "../../images/oilandgas.png";
import MachineManu from "../../images/Machine_manu.png";
import Infra from "../../images/Infrastructure.png";

/* New industry images (add these images in /images folder) */
import Plywood from "../../images/plywood.png";
import Tyre from "../../images/tyre.png";
import Army from "../../images/army.png";
import Government from "../../images/government.png";
import Dams from "../../images/dam.png";
import Automobiles from "../../images/automobile.png";
import BatteryPlant from "../../images/battery.png";
import Houseware from "../../images/houseware.png";

export const marketsData = [
  {
    id: "textile",
    name: "Textile",
    image: Textile,
    route: "/projects/textile",
    icon: Factory,
    projects: 28,
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
    image: Pharma,
    route: "/projects/pharmaceutical",
    icon: Pill,
    projects: 19,
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    image: FoodAndBev,
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
    image: MachineManu,
    route: "/projects/manufacturing",
    icon: Settings,
    projects: 31,
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    image: Infra,
    route: "/projects/infrastructure",
    icon: Building2,
    projects: 17,
  },

  /* ✅ NEW INDUSTRIES */

  {
    id: "plywood",
    name: "Plywood Industries",
    image: Plywood,
    route: "/projects/plywood",
    icon: Hammer,
    projects: 30,
  },
  {
    id: "tyre",
    name: "Tyre Plants",
    image: Tyre,
    route: "/projects/tyre",
    icon: Factory,
    projects: 20,
  },
  {
    id: "army",
    name: "Army Units",
    image: Army,
    route: "/projects/army",
    icon: Shield,
    projects: 5,
  },
  {
    id: "government",
    name: "Government Sectors",
    image: Government,
    route: "/projects/government",
    icon: Landmark,
    projects: 10,
  },
  {
    id: "dams-turbines",
    name: "Dams & Turbines",
    image: Dams,
    route: "/projects/dams-turbines",
    icon: Wind,
    projects: 5,
  },
  {
    id: "automobile",
    name: "Cars & Automobiles",
    image: Automobiles,
    route: "/projects/automobile",
    icon: Car,
    projects: 10,
  },
  {
    id: "battery",
    name: "Battery Plants",
    image: BatteryPlant,
    route: "/projects/battery",
    icon: Battery,
    projects: 15,
  },
  {
    id: "houseware",
    name: "Houseware Manufacturing",
    image: Houseware,
    route: "/projects/houseware",
    icon: Factory,
    projects: 5,
  },
];