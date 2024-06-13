import { styled } from 'styled-components'

interface LeaderboardItemContainerProps {
  tinted?: boolean
}

export const LeaderboardItemContainer = styled.div<LeaderboardItemContainerProps>`
  background-color: ${({ tinted }) => tinted ? '#f4f4f4' : 'white'};
  display: flex;
  padding: 0.5rem;
`

interface LeaderboardItemColumnProps {
  width?: string
  centered?: boolean
}

export const LeaderboardItemColumn = styled.div<LeaderboardItemColumnProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ centered }) => centered ? 'center' : 'flex-start'};
  width: ${({ width }) => {
    switch (width) {
      case 'position':
        return '60px'
      case 'player':
        return '200px'
      case 'stat':
        return '100px'
      default:
        return 'auto'
    }
  }};
  font-family: 'Roboto', sans-serif;

  @media (max-width: 480px) {
    width: ${({ width }) => {
      switch (width) {
        case 'position':
          return '50px'
        case 'player':
          return '100px'
        case 'stat':
          return '50px'
        default:
          return 'auto'
      }
    }};
`

export const PlayerColumn = styled(LeaderboardItemColumn)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
  }

  h3 {
    font-size: 1rem;
    font-style: italic;
    font-weight: 400;
    margin: 0;
    margin-top: 0.5rem;
  }

  @media (max-width: 480px) {
    width: 120px;

    h2 {
      font-size: 1rem;
    }

    h3 {
      font-size: 0.8rem;
    }
  }
`