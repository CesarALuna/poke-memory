import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  border: 1px solid var(--lightGrey);
  border-radius: 20px;
  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  transition: transform 0.3s;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
`

export const Content = styled.div`
  padding: 0;
  font-size: 1.6rem;
  text-align: center;
`

export const Image = styled.img`
  padding: 0;
  transform: scale(1.1);
  filter: drop-shadow(8px 2px 5px var(--medGrey));
  overflow: hidden;
`
