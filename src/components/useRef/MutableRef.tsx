import { useRef, useEffect, useState } from 'react';
export const MutableRef = () => {
  const [timer, setTtimer] = useState(0);
  const interValRef = useRef<number | null>(null)

  const stopTimer = () => {
    if (interValRef.current)
      window.clearInterval(interValRef.current)
  }
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTtimer((timer) => timer + 1)
    }, 1000)
    return () => {
      stopTimer();
    }
  })

  return (
    <div>
      <h1>HookTimer - {timer}</h1>
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  )
}