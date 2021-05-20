import React from 'react'

const DisplayPlayer = ({ pokemon }) => {
  return (
    <div className="player">
      <div className="player-img">
        {pokemon === 'fire'
          ? 'FIRE'
          : pokemon === 'water'
          ? 'WATER'
          : pokemon === 'grass'
          ? 'GRASS'
          : 'DITTO'}
      </div>
    </div>
  )
}
export default DisplayPlayer
