import React from 'react'
import { Wrapper, Content, Image } from './Card.style'

const Card = ({ pokemon, handleCardClick }) => {
  return (
    <Wrapper onClick={handleCardClick}>
      <Image src={pokemon.image} alt={pokemon.name} />
      <Content>{pokemon.name}</Content>
    </Wrapper>
  )
}

export default Card
