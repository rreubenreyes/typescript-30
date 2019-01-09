/* elements */
const hourHand: Element = document.querySelector(`.hour-hand`)
const minuteHand: Element = document.querySelector(`.min-hand`)
const secondHand: Element = document.querySelector(`.second-hand`)

/* behavior */
type AnalogTime = [number, number, number]
type AnalogTimeRotation = [string, string, string]

const getRotationAngle = (t: AnalogTime): AnalogTimeRotation => {
  const clockOffsetDegs: number = 90
  const secondDegs = (t[2] * 360) / 60 + clockOffsetDegs
  const minuteDegs = (t[1] * 360) / 60 + secondDegs / 60 + clockOffsetDegs
  const hourDegs = (t[0] * 360) / 12 + minuteDegs / 60 + clockOffsetDegs

  return [`${hourDegs}deg`, `${minuteDegs}deg`, `${secondDegs}deg`]
}

const move = (): void => {
  const time: Date = new Date()
  const now: AnalogTime = [
    time.getHours(),
    time.getMinutes(),
    time.getSeconds()
  ]
  const [hours, minutes, seconds] = getRotationAngle(now)
  hourHand.style.transform = `rotate(${hours})`
  minuteHand.style.transform = `rotate(${minutes})`
  secondHand.style.transform = `rotate(${seconds})`
}

move()
setInterval(move, 1000)
