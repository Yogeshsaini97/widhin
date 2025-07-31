import React from 'react';
import CountUp from 'react-countup';

const stats = [
  { number: 9000, label: 'Projects Delivered' },
  { number: 2000, label: 'Happy Customer' },
  { number: 28, label: 'Awards Winning' },
];

const HappyClients = () => {
  return (
    <div style={styles.wrapper}>
      {stats.map((item, index) => (
        <div key={index} style={styles.statBox}>
          <div style={styles.number}>
            <CountUp end={item.number} duration={2.5} separator="," />
            <span style={styles.plus}> +</span>
          </div>
          <div style={styles.label}>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '80px',
    backgroundColor: '#121212',
    padding: '40px 20px',
    color: '#fff',
    fontFamily: 'sans-serif',
  },
  statBox: {
    textAlign: 'center',
  },
  number: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#fff',
  },
  plus: {
    color: '#f9a825',
    fontSize: '36px',
    marginLeft: '5px',
  },
  label: {
    marginTop: '8px',
    fontSize: '18px',
    color: '#ccc',
  },
};

export default HappyClients;
