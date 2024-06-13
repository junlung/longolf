import { Golfer } from "../types"
import { LeaderboardItem } from "./LeaderboardItem"
import {
  LeaderboardContainer,
  Header,
  HeaderItem
} from "./Leaderboard.styles"

interface LeaderboardProps {
  golfers: Golfer[]
}

export const Leaderboard = ({ golfers }: LeaderboardProps) => {
  return (
    <LeaderboardContainer>
      <Header>
        <HeaderItem width={'position'} centered>POS</HeaderItem>
        <HeaderItem width={'player'}>PLAYER</HeaderItem>
        <HeaderItem width={'stat'} centered>TOTAL</HeaderItem>
        <HeaderItem width={'stat'} centered>TODAY</HeaderItem>
        <HeaderItem width={'stat'} centered>THRU</HeaderItem>
      </Header>
      {golfers.map((golfer, index) => (
        <LeaderboardItem key={golfer.id} golfer={golfer} variant={index%2} />
      ))}
    </LeaderboardContainer>
  )
}