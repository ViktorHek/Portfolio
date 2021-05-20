import React from 'react'
import './RPS.css'


const DisplayPlayer = ({ pokemon }) => {
  return (
    <div className="player">
      <img className="player-img"
        src={pokemon === 'fire'
          ? '/images/bob_grill.png'
          : pokemon === 'water'
          ? '/images/fred.png'
          : pokemon === 'grass'
          ? '/images/fat_RPS.png'
          : '/images/flower.png'} alt="PLAYER"
      />
    </div>
  )
}
export default DisplayPlayer
