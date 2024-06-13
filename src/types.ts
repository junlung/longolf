export interface User {
  id: number
  name: string
  golferIds: string[]
}

export interface Golfer {
  id: string
  position: number
  firstName: string
  lastName: string
  total: number
  toPar: number
  toParToday: number
  thru: number
  teeTime: string
  user?: User
}