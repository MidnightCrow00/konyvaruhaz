import React from 'react'
import Kosarsor from './Kosarsor'
import './Kosar.css'

export default function Kosar({kosar}) {
    const osszeg = kosar.reduce((acc, termek) => acc + (termek.ar * termek.db), 0);

    return (
      <div className="kosar">
        <h2>Kosár tartalma</h2>
        {kosar.length === 0 ? (
          <p>A kosár üres</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Termék</th>
                  <th>Ár</th>
                  <th>Db</th>
                </tr>
              </thead>
              <tbody>
                {kosar.map((termek, index) => (
                  <Kosarsor key={index} termek={termek} />
                ))}
              </tbody>
            </table>
            <h3>Végösszeg: {osszeg} Ft</h3>
          </>
        )}
      </div>
    );
}
