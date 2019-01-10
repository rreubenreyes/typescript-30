interface CanvasDrawingState {
  isDrawing: boolean
  lastX: number
  lastY: number
}

/* initialize canvas */
const canvas: HTMLCanvasElement = document.querySelector(`#draw`)
const ctx: CanvasRenderingContext2D = canvas.getContext(`2d`)
const state: CanvasDrawingState = {
  isDrawing: false,
  lastX: 0,
  lastY: 0
}

/* set canvas bounding rect */
canvas.width = window.innerWidth
canvas.height = window.innerHeight

/* set RenderingContext drawing properties */
ctx.strokeStyle = `#fc4675` // color
ctx.lineCap = `round` // line ending shape
ctx.lineJoin = `round` // when a line changes direction, a joining area must be rendered
ctx.lineWidth = 10

/* canvas behavior */
function draw({ offsetX, offsetY }: MouseEvent): void {
  const { isDrawing, lastX, lastY } = state
  /* if not moused down, don't do anything */
  if (!isDrawing) {
    return
  }

  /* calculate line properties */
  ctx.beginPath() // start a new line
  ctx.moveTo(lastX, lastY) // line origin
  ctx.lineTo(offsetX, offsetY)

  /* actually draw */
  ctx.stroke()
  ;[state.lastX, state.lastY] = [offsetX, offsetY] // line endpoint
}

/* handlers */
function handleMouseDown({ offsetX, offsetY }: MouseEvent): void {
  state.isDrawing = true
  ;[state.lastX, state.lastY] = [offsetX, offsetY]
}

/* listeners */
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', handleMouseDown)
canvas.addEventListener(
  'mouseup',
  (): void => {
    state.isDrawing = false
  }
)
