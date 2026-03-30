import { useState } from 'react'

function ClickCounter() {
  const [count, setCount] = useState(0)

  return (
    <button className="counter" onClick={() => setCount((value) => value + 1)}>
      Count is {count}
    </button>
  )
}

export default ClickCounter
