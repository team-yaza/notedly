import { useEffect } from "react"

const MyNotes = () => {
  useEffect(() => {
    document.title = "My Notes - Notedly"
  }, [])

  return <div></div>
}

export default MyNotes
