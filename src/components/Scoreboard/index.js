import React from 'react'
import { Wrapper, Content } from './Scoreboard.style'

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <Wrapper>
      <Content>
        <h3>Current Score: {currentScore}</h3>
        <h3>Best Score: {bestScore}</h3>
      </Content>
    </Wrapper>
  )
}

export default Scoreboard
