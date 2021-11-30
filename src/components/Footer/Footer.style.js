import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  padding: 0.5rem;
  background-color: var(--darkGrey);
  color: var(--white);
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: bottom;
  padding: 5px;
`

export const Link = styled.a`
  display: flex;
  vertical-align: baseline;
  padding: 15px;
  transform: scale(1.5);
  color: var(--white);

  :hover {
    color: #e4000f;
  }
`
