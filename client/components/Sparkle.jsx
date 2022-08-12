import { useState } from "react"

function Sparkle() {
  const [sparkle, setSparkle] = useState(false)

  return (
    <div>
      <button onClick={() => addSparkle(sparkle + "\u2728")}></button>
      <p>{sparkle}</p>
    </div>
  )
}

export default Sparkle
