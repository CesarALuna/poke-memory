import React from 'react'
import { Wrapper, Content, Link } from './Header.style'
import { FaGithub } from 'react-icons/fa'

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <h1>PokeMemory</h1>
        <>
          <Link
            href="https://github.com/CesarALuna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>CesarALuna@</h4>
            <FaGithub />
          </Link>
        </>
      </Content>
    </Wrapper>
  )
}

export default Header
