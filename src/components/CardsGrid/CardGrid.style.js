import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  padding: 2rem;
  gap: 2rem;
  background-color: #3c5aa6;
  overflow: none;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`

export const Content = styled.div``
