/* elements */
const video: HTMLVideoElement = document.querySelector(`.viewer`)
const playButton: HTMLButtonElement = document.querySelector(`.toggle`)
const progressSpace: HTMLDivElement = document.querySelector(`.progress`)
const progressBar: HTMLDivElement = document.querySelector(`.progress__filled`)

/* behavior */
let mousedown: boolean = false
playButton.innerHTML = `❙❙` // reflect that video is paused on load
const handlePlayButton = (): void => {
  if (video.paused) {
    video.play()
    playButton.innerHTML = `►`
  } else {
    video.pause()
    playButton.innerHTML = `❙❙`
  }
}

const handleProgress = (): void => {
  const percent: number = video.currentTime / video.duration
  progressBar.style.flexBasis = `${percent * 100}%`
}

function scrub({ offsetX }: MouseEvent): void {
  const scrubTime = (offsetX / progressSpace.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

const handleMouseUp = (): void => {
  mousedown = false
}

/* listeners */
playButton.addEventListener('click', handlePlayButton)
progressSpace.addEventListener('mousedown', () => {
  mousedown = true
})
progressSpace.addEventListener('mouseup', () => {
  mousedown = false
})
progressSpace.addEventListener('mousemove', e => {
  mousedown && scrub(e)
})
video.addEventListener('timeupdate', handleProgress)
