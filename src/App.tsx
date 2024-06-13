import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { Leaderboard } from "./components/Leaderboard"
import { InfoPanel } from "./components/InfoPanel"
import { GlobalStyles } from "./GlobalStyles"
import { Golfer, User } from "./types"
import userData from './assets/picks.json'

function App() {
  const users = userData.userData as User[]
  const [golfers, setGolfers] = useState<Golfer[]>([])

  const { data: leaderboardData, isLoading: golfersLoading } = useQuery({
    queryKey: ['leaderboard'],
    queryFn: async () => {
      const response = await fetch('https://ace-api.usga.org/scoring/v1/leaderboard.json?championship=uso&championship-year=2024')
      return response.json()
    }
  })

  useEffect(() => {
    if (leaderboardData) {
      const standings = leaderboardData.standings
      const golfers = [] as Golfer[]

      standings.forEach((standing: any) => {
        const golfer = {
          id: standing.player.identifier,
          position: standing.position.displayValue,
          firstName: standing.player.firstName,
          lastName: standing.player.lastName,
          total: standing.totalScore.displayValue,
          toPar: standing.toPar.displayValue,
          toParToday: standing.toParToday.displayValue,
          thru: standing.holesThrough.value,
          teeTime: standing.holesThrough.displayValue,
          user: users.find(user => user.golferIds.includes(standing.player.identifier))
        }
        if (golfer.user !== undefined) { golfers.push(golfer) }
      })
      setGolfers(golfers)
    }
  }, [golfersLoading])

  if (golfersLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Leaderboard golfers={golfers} />
    </>
  )
}

export default App
