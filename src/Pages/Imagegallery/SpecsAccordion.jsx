import React, { useState } from "react";
import "./SpecsAccordion.css";

export default function SpecsAccordion({ specs = {} }) {
  const keys = Object.keys(specs);
  const [openKey, setOpenKey] = useState(keys[0] || null);

  return (
    <div className="specs-accordion">
      <h3>Full Specifications</h3>
      {keys.map(key => (
        <div className="spec-panel" key={key}>
          <div className="spec-header" onClick={() => setOpenKey(openKey === key ? null : key)}>
            <strong>{key}</strong>
            <span className="toggle">{openKey === key ? "−" : "+"}</span>
          </div>
          {openKey === key && (
            <div className="spec-body">
              <table>
                <tbody>
                  {specs[key].map((row, idx) => (
                    <tr key={idx}>
                      <td className="spec-k">{row.k}</td>
                      <td className="spec-v">{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
