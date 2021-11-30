import React from 'react'
import { Wrapper } from './CardGrid.style'
import Card from '../Card'

const CardsGrid = ({ pokemons, handleCardClick }) => {
  const pokemonCards = pokemons.map((pokemon) => (
    <Card
      key={pokemon.id}
      pokemon={pokemon}
      handleCardClick={handleCardClick}
    />
  ))

  return <Wrapper>{pokemonCards}</Wrapper>
}

export default CardsGrid
