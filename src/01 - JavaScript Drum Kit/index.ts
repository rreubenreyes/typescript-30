/* elements */
const keys: NodeListOf<Element> = document.querySelectorAll('.key')

/* handlers */
function handleKeyDown({ keyCode }: KeyboardEvent) {
  const dataQuery: string = `[data-key="${keyCode}"]`
  const audio: HTMLAudioElement = document.querySelector(`audio${dataQuery}`)
  const key: HTMLDivElement = document.querySelector(`div${dataQuery}`)
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

function handleTransitionEnd(e: TransitionEvent): void {
  if (e.propertyName !== 'transform') {
    return
  }
  e.target.classList.remove('playing')
}

/* listeners */
window.addEventListener('keydown', handleKeyDown)
keys.forEach((key: Element) => {
  key.addEventListener('transitionend', handleTransitionEnd)
})
