/* tslint:disable:variable-name */
/* interfaces */

class ModifierState {
  private _isMultiEnabled: boolean = false
  private _lastChecked: number | null

  get isMultiEnabled(): boolean {
    return this._isMultiEnabled
  }

  set isMultiEnabled(enabled: boolean) {
    this._isMultiEnabled = enabled
  }

  get lastChecked(): number {
    return this._lastChecked
  }

  set lastChecked(index: number) {
    this._lastChecked = index
  }
}

/* elements */
const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  `[type="checkbox"]`
)

/* state */
const state = new ModifierState()

/* handlers */
function handleModifierKeyDown({ keyCode }: KeyboardEvent): void {
  switch (keyCode) {
    case 16:
      state.isMultiEnabled = true
      break
    default:
      break
  }
}

function handleModifierKeyUp({ keyCode }: KeyboardEvent): void {
  switch (keyCode) {
    case 16:
      state.isMultiEnabled = false
      break
    default:
      break
  }
}

function handleClick(this: HTMLInputElement): void {
  if (state.isMultiEnabled) {
    const { lastChecked: lastCheckedIndex } = state
    const index: number = parseInt(this.dataset.index, 10)

    const [min, max]: number[] = [lastCheckedIndex, index].sort()

    checkboxes.forEach((checkbox: HTMLInputElement) => {
      const i: number = parseInt(checkbox.dataset.index, 10)
      if (i >= min && i <= max) {
        checkbox.checked = true
      }
    })
  }
  state.lastChecked = this.checked ? parseInt(this.dataset.index, 10) : null
}

/* listeners */
window.addEventListener('keydown', handleModifierKeyDown)
window.addEventListener('keyup', handleModifierKeyUp)

checkboxes.forEach((checkbox: HTMLInputElement, i: number) => {
  /* assign an index to each DOM element */
  checkbox.setAttribute(`data-index`, `${i}`)
  checkbox.addEventListener('click', handleClick)
})
