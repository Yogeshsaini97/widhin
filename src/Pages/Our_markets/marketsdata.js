import {
  Factory,
  Pill,
  Utensils,
  Droplet,
  Settings,
  Building2,
} from "lucide-react";

export const marketsData = [
  {
    id: "textile",
    name: "Textile",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1920&q=100",
    route: "/projects/textile",
    icon: Factory,
    projects: 28,
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=90",
    route: "/projects/pharmaceutical",
    icon: Pill,
    projects: 19,
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=90",
    route: "/projects/food-beverage",
    icon: Utensils,
    projects: 22,
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    image:
      "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=1920&q=90",
    route: "/projects/oil-gas",
    icon: Droplet,
    projects: 14,
  },
   {
    id: "manufacturing",
    name: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1920&q=100",
    route: "/projects/manufacturing",
    icon: Settings,
    projects: 31,
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1920&q=90",
    route: "/projects/infrastructure",
    icon: Building2,
    projects: 17,
  },
];
