interface MenuItem {
  value: string
  checked: boolean
}

/* elements */
const addItems: HTMLFormElement = document.querySelector('.add-items')
const itemsList: HTMLUListElement = document.querySelector('.plates')

/* initialize an array variable to be equivalent to localStorage */
const items: MenuItem[] = JSON.parse(localStorage.getItem('items'))

/* handlers */
function handleSubmit(this: HTMLFormElement, e: Event): void {
  const { item } = this
  e.preventDefault()
  items.push({
    checked: false,
    value: item.value
  })

  localStorage.setItem('items', JSON.stringify(items)) // sync with localStorage
  populateItemsList()
}

const populateItemsList = (): void => {
  itemsList.innerHTML = items
    .map(
      ({ checked, value }: MenuItem, key: number): string => {
        return `
    <li>
      <input type="checkbox" data-index="${key}" id="item${key}" />
      <label for="item${key}">${value}</label>
    </li>
      `
      }
    )
    .join('\n')
}

/* listeners */
addItems.addEventListener('submit', handleSubmit)

/* main */
/* initialize localStorage if it is empty */
if (!localStorage.getItem('items')) {
  localStorage.setItem('items', '[]')
}
populateItemsList()
