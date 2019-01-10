const secretCode: string = 'poopmypants'
const keyBuffer: string[] = Array(secretCode.length)

const writeToBuffer = ({ key }: KeyboardEvent): void => {
  keyBuffer.shift()
  keyBuffer.push(key)
}

window.addEventListener('keyup', (e: KeyboardEvent) => {
  writeToBuffer(e)
  if (keyBuffer.join('').includes(secretCode)) {
    console.log('oh SHIT') //tslint:disable-line
    cornify_add()
  }
})
