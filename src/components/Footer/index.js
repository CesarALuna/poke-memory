import React from 'react'
import { Wrapper, Content, Link } from './Footer.style'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <p>Copyright © 2021 Cesar Luna</p>
        <Link href="https://github.com/cesaraluna">
          <FaGithub />
        </Link>
      </Content>
    </Wrapper>
  )
}

export default Footer
