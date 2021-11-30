import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  background-color: var(--darkGrey);
  color: white;
  margin-bottom: 10px;
  border-bottom: 4px solid #b3a125;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 250px;
    gap: 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  font-size: 3rem;

  h3 {
    font-size: var(--fontMed);
    padding-right: 20px;
  }
`
