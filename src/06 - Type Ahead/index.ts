/* interfaces */
interface City {
  city: string
  growth_from_2000_to_2013: string
  latitude: number
  longitude: number
  population: string
  rank: string
  state: string
}

/* fetch data */
const getCitiesData = async (): Promise<City[]> => {
  const endpoint: string =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
  const citiesRes: Response = await fetch(endpoint)
  const citiesJson: City[] = await citiesRes.json()
  return citiesJson
}

const cities: City[] = []
getCitiesData().then((citiesData: City[]) => {
  cities.push(...citiesData)
})

/* elements */
const searchInput: HTMLInputElement = document.querySelector('.search')
const suggestions: HTMLUListElement = document.querySelector('.suggestions')

/* behavior */
function findMatches(wordToMatch: string, citiesData: City[]): City[] {
  return citiesData.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

function numberWithCommas(x: string): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/* handlers */
function handleInput(this: HTMLInputElement): string | void {
  const matchArray: City[] = findMatches(this.value, cities)
  const html: string = matchArray
    .map(place => {
      const regex: RegExp = new RegExp(this.value, 'gi')
      const cityName: string = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      )
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      )
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `
    })
    .join('')
  suggestions.innerHTML = html
}

/* listeners */
searchInput.addEventListener('change', handleInput)
searchInput.addEventListener('keyup', handleInput)
