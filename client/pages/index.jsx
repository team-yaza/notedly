import { useQuery, gql } from "@apollo/client"
import Button from "../components/Button"

const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`

export default function Home() {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      {data.noteFeed.notes.map((note) => (
        <div key={note.id}>{note.author.username}</div>
      ))}
    </div>
  )
}
