import React from 'react';
import './ClientStrip.css';
import pansonic from "../images/panasonic.png"

const ClientStrip = () => {
  return (
    <div className="client-strip-container">
      <p className="client-strip-title">
        Serving 11,000+ industrial clients, including the world’s largest manufacturers and automation leaders.
      </p>
      <div className="client-logos">
        <img src={pansonic} alt="Panasonic" />
        <img src="/logos/bumble.png" alt="bumble" />
        <img src="/logos/weewoo.png" alt="weewoo" />
        <img src="/logos/hubx.png" alt="HUBX" />
        <img src="/logos/almus.png" alt="almus" />
        <img src="/logos/impala.png" alt="impala studios" />
        <img src="/logos/appnation.png" alt="AppNation" />
      </div>
    </div>
  );
};

export default ClientStrip;
