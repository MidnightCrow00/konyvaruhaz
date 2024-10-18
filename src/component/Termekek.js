import React from 'react'
import Termek from './Termek'
import './Termekek.css'

export default function Termekek({kosarhozAd, termekek}) {
  return (
    <div className="termekek">
    <h2>Termékek:</h2>
    <div className="termek">
      {termekek.map((termek) => (
        <Termek key={termek.id} termek={termek} kosarhozAd={kosarhozAd} />
      ))}
    </div>
  </div>
  )
}
