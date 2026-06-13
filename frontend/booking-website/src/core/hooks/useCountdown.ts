import { useEffect, useState } from "react"

export default function useCountdown(initialTime: number = 30) {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime)

  useEffect(() => {
    if (timeLeft <= 0) return

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  const reset = () => {
    setTimeLeft(initialTime)
  }

  return {
    timeLeft,
    isFinished: timeLeft === 0,
    reset,
  }
}
