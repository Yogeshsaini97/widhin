import React from 'react';

const ExperienceBox = () => {
  return (
    <div style={styles.container}>
      <div style={styles.years}>10<span style={styles.plus}>+</span></div>
      <div style={styles.text}>Years of Experience</div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(50, 50, 80, 0.8))',
    color: 'white',
    padding: '30px 40px',
    borderRadius: '20px',
    width: '280px',
    position: 'absolute',
    top: '140px',
    right: '15px',
    textAlign: 'center',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
  },
  years: {
    fontSize: '64px',
    fontWeight: 'bold',
    lineHeight: '1',
  },
  plus: {
    fontSize: '32px',
    verticalAlign: 'super',
  },
  text: {
    marginTop: '10px',
    fontSize: '20px',
    opacity: 0.85,
  }
};

export default ExperienceBox;
