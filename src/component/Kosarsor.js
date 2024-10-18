import React from 'react'

export default function Kosarsor({termek}) {
  return (
      <tr>
        <td>{termek.nev}</td>
        <td>{termek.ar} Ft</td>
        <td>{termek.db} db</td>
      </tr>
  )
}
