import React, { useState, useEffect } from 'react'
//components
import Header from './Header'
import Scoreboard from './Scoreboard'
import CardsGrid from './CardsGrid'
import { shuffleArray, pokemonArr } from '../utilities'
//style
import { Wrapper } from './Home.style'

const Home = () => {
  const POKEMONS_AMOUNT = 12
  const [pokemons, setPokemons] = useState([])
  const [clickedPokemons, setClickedPokemons] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    const loadCards = async () => {
      setPokemons(shuffleArray(await fetchPokemons(POKEMONS_AMOUNT)))
    }

    loadCards()
  }, [])

  const fetchPokemons = async (amount) => {
    const pokemons = []

    for (let i = 1; i <= amount; i++) {
      // change ${i} here to randomize pokemon
      // const pool = Math.ceil(Math.random() * 151)
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonArr[i]}`
      const response = await fetch(pokemonUrl)
      const pokemon = await response.json()
      const id = pokemon.id
      const name = pokemon.name
      const image = pokemon.sprites.front_default

      pokemons.push({ id, name, image })
      console.log(pokemon.id)
    }

    return pokemons
  }

  const handleCardClick = (e) => {
    const pokemonName = e.target.parentNode.lastChild.textContent
    playRound(pokemonName)
    setPokemons(shuffleArray(pokemons))
  }

  const playRound = (pokemonName) => {
    if (clickedPokemons.includes(pokemonName)) {
      resetGame()
    } else {
      const newScore = currentScore + 1
      if (newScore > bestScore) setBestScore(newScore)
      setCurrentScore(newScore)
      setClickedPokemons((prevState) => [...prevState, pokemonName])
    }
  }

  const resetGame = () => {
    setClickedPokemons([])
    setCurrentScore(0)
  }

  return (
    <>
      <Header />
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Wrapper>
        <CardsGrid pokemons={pokemons} handleCardClick={handleCardClick} />
      </Wrapper>
    </>
  )
}

export default Home
