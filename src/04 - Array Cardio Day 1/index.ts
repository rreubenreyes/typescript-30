/* tslint:disable:no-console */
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
interface IInventor {
  first: string
  last: string
  year: number
  passed: number
}

const inventors: IInventor[] = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

const people: string[] = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William'
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventors1500s: IInventor[] = inventors.filter(
  ({ year }: IInventor) => year >= 1500 && year < 1600
)
console.log(`1)`, inventors1500s)

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorsFirstLast: string[] = inventors.map(
  ({ first, last }: IInventor) => `${first} ${last}`
)
console.log(`2)`, inventorsFirstLast)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsByAge: IInventor[] = inventors.sort(
  ({ year: a }: IInventor, { year: b }: IInventor) => a - b
)
console.log(`3)`, inventorsByAge)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalAge: number = inventors.reduce(
  (a: number, { year, passed }: IInventor) => a + (passed - year),
  0
)
console.log(`4)`, totalAge)

// 5. Sort the inventors by years lived
const inventorsByLifespan: IInventor[] = inventors.sort(
  (
    { year: yearsA, passed: passedA }: IInventor,
    { year: yearsB, passed: passedB }: IInventor
  ) => passedB - yearsB - (passedA - yearsA)
)
console.log(`5)`, inventorsByLifespan)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
/* i skipped #6, oops */

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleByLastName: string[] = people.sort()
console.log(`7)`, peopleByLastName)

// 8. Reduce Exercise
// Sum up the instances of each of these
interface IStringTally {
  [index: string]: number
}
const data: string[] = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck'
]
const counts: IStringTally = data.reduce((a: IStringTally, b: string) => {
  a[b] ? (a[b] += 1) : (a[b] = 1)
  return a
}, {})
console.log(`8)`, counts)
