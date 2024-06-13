import { styled } from 'styled-components'

const InfoPanelContainer = styled.div`
  background-color: #22311d;
  padding: 0;
  margin: 0;

  h1 {
    color: white;
    font-size: 3rem;
    font-weight: 700;
    padding: 1rem;
    margin: 0;
  }
`

export const InfoPanel = () => {
  return (
    <InfoPanelContainer>
      <h1>U.S. Open</h1>
    </InfoPanelContainer>
  )
}