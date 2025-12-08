import lt_plc from "../images/lt_plc.png";

export const productsData = [
  {
    id: "industrial-automations",
    title: "Industrial Automations",
    icon: lt_plc,
    description: "PLC, HMI, Drives, and complete industrial automation solutions.",
    subProducts: [
      {
        id: "plc",
        title: "PLC",
        items: [
          {
            id: "plc1",
            name: "Siemens S7-1200",
            model: "S7-1200 Series",
            sku: "SIEM-1200-PLC",
            description:
              "Compact automation controller ideal for machine-level applications.",
            image: lt_plc,
            tags: ["Siemens", "Automation", "PLC"],
            brand: "Siemens",
            features: [
              "High-speed processing",
              "Modular expansion",
              "Profinet support",
              "Ideal for packaging & manufacturing"
            ],
            priceRange: "₹20,000 – ₹45,000",
longDescription: `
The Siemens S7-1200 is a modular, compact PLC designed for small to medium automation tasks.
It is widely used in packaging, conveyor systems, food machinery, factory automation, and
machine monitoring systems. With Profinet support, modular expansions and built-in high-speed
processing capabilities, the S7-1200 offers reliable performance and exceptional flexibility
for industrial applications.
`,
            // Newly added fields
            datasheet: "/pdfs/s7-1200.pdf",
            ratings: 4.5,
            reviews: 128,
            availability: "In Stock"
          },

          {
            id: "plc2",
            name: "Allen Bradley MicroLogix",
            model: "MicroLogix 1100",
            sku: "AB-MLX-1100",
            description: "High-performance PLC for industrial automation.",
            image: lt_plc,
            tags: ["Allen Bradley", "Rockwell", "PLC"],
            brand: "Allen Bradley",
            features: [
              "High-speed processing",
              "Modular expansion",
              "EtherNet/IP support",
              "Ideal for assembly & industrial automation"
            ],
            priceRange: "₹25,000 – ₹48,000",
              longDescription: `
The Siemens S7-1200 is a modular, compact PLC designed for small to medium automation tasks.
It is widely used in packaging, conveyor systems, food machinery, factory automation, and
machine monitoring systems. With Profinet support, modular expansions and built-in high-speed
processing capabilities, the S7-1200 offers reliable performance and exceptional flexibility
for industrial applications.
`,

            // Newly added fields
            datasheet: "/pdfs/micrologix1100.pdf",
            ratings: 4.2,
            reviews: 96,
            availability: "Limited Stock"
          }
        ]
      },

      {
        id: "hmi",
        title: "HMI",
        items: [
          {
            id: "hmi1",
            name: "Siemens KTP700",
            model: "KTP700 Basic",
            sku: "SIEM-KTP700",
            description: "Touch panel for seamless machine communication.",
            image: lt_plc,
            tags: ["Siemens", "HMI", "Touch Panel"],
            brand: "Siemens",
            priceRange: "₹15,000 – ₹35,000", 
             longDescription: `
The Siemens S7-1200 is a modular, compact PLC designed for small to medium automation tasks.
It is widely used in packaging, conveyor systems, food machinery, factory automation, and
machine monitoring systems. With Profinet support, modular expansions and built-in high-speed
processing capabilities, the S7-1200 offers reliable performance and exceptional flexibility
for industrial applications.
`,

            // Newly added fields
            datasheet: "/pdfs/ktp700.pdf",
            ratings: 4.6,
            reviews: 89,
            availability: "In Stock"
          }
        ]
      }
    ]
  }
];
