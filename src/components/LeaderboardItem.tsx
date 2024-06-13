import { Golfer } from '../types'
import {
  LeaderboardItemContainer,
  LeaderboardItemColumn,
  PlayerColumn,
} from './LeaderboardItem.styles'

interface LeaderboardItemProps {
  golfer: Golfer,
  variant: number
}

export const LeaderboardItem = ({ golfer, variant }: LeaderboardItemProps) => {
  const thruValue = golfer.thru === 0 ? golfer.teeTime : golfer.thru
  const tinted = variant === 1
  return (
    <LeaderboardItemContainer tinted={tinted}>
      <LeaderboardItemColumn width={'position'} centered>{golfer.position}</LeaderboardItemColumn>
      <PlayerColumn>
        <h2>{golfer.firstName} {golfer.lastName}</h2>
        <h3>{golfer.user?.name}</h3>
        </PlayerColumn>
      <LeaderboardItemColumn width={'stat'} centered>{golfer.toPar}</LeaderboardItemColumn>
      <LeaderboardItemColumn width={'stat'} centered>{golfer.toParToday}</LeaderboardItemColumn>
      <LeaderboardItemColumn width={'stat'} centered>{thruValue}</LeaderboardItemColumn>
    </LeaderboardItemContainer>
  )
}