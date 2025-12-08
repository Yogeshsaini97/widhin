import controller from "../images/Controller.svg";


const productsMenu = [
  {
    category: "Industrial Automations",
     path: "/all-products/industrial-automations",
    icon: undefined,
    items: [
      {
        label: "PLC's",
        path: "/all-products/industrial-automations/plc",
        children: [
          { label: "Siemens S7-1200", path: "/all-products/product/industrial-automations/plc/plc1" },
           { label: "Allen Bradley MicroLogix", path: "/all-products/product/industrial-automations/plc/plc2" }
        ],
      },
      { label: "Simple Application Controllers", path: "/products/simple-controllers" },
      { label: "Motion Controllers", path: "/products/motion" },
    ],
  },
  {
    category: "Drive Products",
     path: "/all-products/drive-products",
    icon: undefined,
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
    icon: undefined,
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
    icon: undefined,
    items: [
      { label: "Collaborative Robots - MELFA", path: "/products/cobots" },
      { label: "Industrial Robots - MELFA", path: "/products/robots" },
    ],
  },
];

export default productsMenu;
