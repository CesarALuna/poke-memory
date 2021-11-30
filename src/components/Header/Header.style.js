import styled from 'styled-components'

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  height: 6vh;
  padding-bottom: 20px;
`

export const Content = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: 100%;
  padding: 10px 0;
  color: #f9fbff;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  margin: 20px;
  transform: scale(1.5);
  color: var(--white);
  text-decoration: none;

  :hover {
    color: #e4000f;
  }
`
