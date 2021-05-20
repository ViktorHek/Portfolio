import React, { Component } from 'react'
import DisplayPlayer from './DisplayPlayer'
import './RPS.css'

const pokemons = ['fire', 'water', 'grass', 'starter']
class Game extends Component {
  state = {
    player: pokemons[3],
    computer: pokemons[3],
    winner: '',
  }

  startFight = () => {
    let count = 0
    let interval = setInterval(() => {
      count++
      this.setState({
        computer: pokemons[Math.floor(window.Math.random() * 3)],
        winner: '',
      })
      if (count > 5) {
        clearInterval(interval)
        this.setState({
          winner: this.champion(),
        })
      }
    }, 100)
  }

  champion = () => {
    const { player, computer } = this.state
    if (
      (player === 'fire' && computer === 'grass') ||
      (player === 'grass' && computer === 'water') ||
      (player === 'water' && computer === 'fire')
    ) {
      return 'You are the Champion'
    } else if (player === computer) {
      return "Pokemons don't fight there friends"
    } else {
      return 'You lose!'
    }
  }

  choosePokemon = (pokemon) => {
    this.setState({
      player: pokemon,
    })
  }

  render() {
    const { player, computer, winner } = this.state
    return (
      <div className="game-container">
        <h1>Rock Paper Scissor. pokemon edition!</h1>
        <div id="playerSelection" className="player_display">
          <DisplayPlayer pokemon={player} />
          <DisplayPlayer pokemon={computer} />
        </div>
        <div class="selection">
          <button onClick={() => this.choosePokemon('fire')}>
            Choose Fire
          </button>
          <button onClick={() => this.choosePokemon('water')}>Wather</button>
          <button onClick={() => this.choosePokemon('grass')}>grass</button>
        </div>

        <div className="winner" data-cy="winner">
          {winner && this.champion()}
        </div>

        <button onClick={this.startFight}>Fight!</button>
      </div>
    )
  }
}

export default Game
