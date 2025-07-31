import React from "react";
import panelImage from "../images/panel.jfif";
import industrialautomation from "../images/industrialautomation.png";
import machine from "../images/machine manufacturing.jfif";

const cardData = [
  {
    title: "Panel Manufacturing",
    description:
      "Custom-designed control panels with robust wiring and top-tier components.",
    image: panelImage,
  },
  {
    title: "Machine Manufacturing",
    description:
      "Precision-crafted machines tailored to industrial and commercial needs.",
    image: machine,
  },
  {
    title: "Industrial Automation Spares",
    description:
      "High-quality spare parts for seamless industrial automation maintenance.",
    image: industrialautomation,
  },
];

const ServiceGrid = () => {
  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>Our Services</h2>
        <p style={styles.subtitle}>Empowering Industry Through Innovation</p>
      </div>
      <div style={styles.grid}>
        {cardData.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <div style={styles.cardText}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.description}</p>
              <a href="#" style={styles.learnMore}>
                Learn More →
              </a>
            </div>
            <div style={styles.cardImageWrapper}>
              <img src={item.image} alt={item.title} style={styles.cardImage} />
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#0f0f11",
    color: "#fff",
    padding: "80px 20px",
    textAlign: "center",
  },
  header: {
    marginBottom: "60px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    fontFamily: "Kanit, sans-serif",
  },
  subtitle: {
    marginTop: "10px",
    fontSize: "18px",
    opacity: 0.7,
    fontFamily: "Kanit, sans-serif",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    alignItems: "center",
  },
  card: {
    background: "linear-gradient(145deg, #1a1a1d, #242429)",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "1000px",
    padding: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    transition: "transform 0.3s",
    gap: "30px",
  },
  cardText: {
    flex: 1,
    textAlign: "left",
    fontFamily: "Kanit, sans-serif",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
  },
  cardDesc: {
    fontSize: "15px",
    opacity: 0.85,
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  learnMore: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    textDecoration: "none",
    borderBottom: "1px solid #fff",
  },
  cardImageWrapper: {
    flex: 1,
    textAlign: "center",
  },
  cardImage: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "12px",
    objectFit: "cover",
  },
};

export default ServiceGrid;
