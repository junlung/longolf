import { styled } from 'styled-components'

export const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
`
interface HeaderItemProps {
  width?: string
  centered?: boolean
}

export const HeaderItem = styled.div<HeaderItemProps>`
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
  font-weight: 700;

  @media (max-width: 480px) {
    width: ${({ width }) => {
      switch (width) {
        case 'position':
          return '50px'
        case 'player':
          return '120px'
        case 'stat':
          return '50px'
        default:
          return 'auto'
      }
    }};

    font-size: 0.8rem;
  }
`