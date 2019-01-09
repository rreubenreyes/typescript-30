/* events */
const panels: NodeListOf<HTMLDivElement> = document.querySelectorAll('.panel')

/* handlers */
function handleClick(this: HTMLDivElement): void {
  this.classList.toggle('open')
}

function handleTransitionEnd(
  this: HTMLDivElement,
  { propertyName }: TransitionEvent
): void {
  propertyName.includes(`flex-grow`) && this.classList.toggle(`open-active`)
}

/* listeners */
panels.forEach((panel: HTMLDivElement) => {
  panel.addEventListener('click', handleClick)
  panel.addEventListener('transitionend', handleTransitionEnd)
})
