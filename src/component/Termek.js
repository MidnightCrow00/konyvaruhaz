import React from 'react';
import './Termek.css';

export default function Termek({ termek, kosarhozAd }) {
  return (
    <div className="termek-test">
      <div className="fej">
        <img src={termek.kep} alt={termek.nev} className="termek-kep" />
        <h3 className="termek-nev">{termek.nev}</h3>
      </div>
      <p className="termek-leiras">{termek.leiras}</p>
      <p className="termek-ar"><strong>Ár: {termek.ar} Ft</strong></p>
      <p className="termek-db"><strong>Darabszám: {termek.db}</strong></p>
      <button className="kosar-gomb" onClick={() => kosarhozAd(termek)}>Kosárba tesz</button>
    </div>
  );
}
