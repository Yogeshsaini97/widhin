import controller from "../images/Controller.svg";


const productsMenu = [
  {
    category: "Controllers",
    icon: controller,
    items: [
      {
        label: "Programmable Controllers MELSEC",
        path: "/products/melsec",
        children: [
          { label: "MELSEC iQ-R", path: "/products/melsec/iq-r" },
          { label: "MELSEC iQ-F", path: "/products/melsec/iq-f" },
        ],
      },
      { label: "Simple Application Controllers", path: "/products/simple-controllers" },
      { label: "Motion Controllers", path: "/products/motion" },
    ],
  },
  {
    category: "Drive Products",
    icon: controller,
    items: [
      {
        label: "AC Servos-MELSERVO",
        path: "/products/ac-servos",
      },
      {
        label: "Inverters-FREQROL",
        path: "/products/inverters",
      },
      {
        label: "Geared Motors",
        path: "/products/motors",
      },
    ],
  },
  {
    category: "Visualization",
    icon: controller,
    items: [
      { label: "HMIs - GOT", path: "/products/hmi" , children: [
          { label: "MELSEC iQ-R", path: "/products/melsec/iq-r" },
          { label: "MELSEC iQ-F", path: "/products/melsec/iq-f" },
        ]},
      { label: "SCADA MC Works64", path: "/products/scada" },
    ],
  },
  {
    category: "Industrial Robots",
    icon: controller,
    items: [
      { label: "Collaborative Robots - MELFA", path: "/products/cobots" },
      { label: "Industrial Robots - MELFA", path: "/products/robots" },
    ],
  },
];

export default productsMenu;
