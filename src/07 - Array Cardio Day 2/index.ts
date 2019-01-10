// ## Array Cardio Day 2
interface Person {
  name: string
  year: number
}

interface UserComment {
  text: string
  id: number
}

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
]

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const some19: boolean = people.some(({ year }: Person) => year > 2019 - 19)
console.log(
  `1) Array.prototype.some() // is at least one person 19 or older?`,
  some19
)
// Array.prototype.every() // is everyone 19 or older?
const every19: boolean = people.every(({ year }: Person) => year > 2019 - 19)
console.log(`2) Array.prototype.every() // is everyone 19 or older?`, every19)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const commentWithId: UserComment = comments.find(
  ({ id }: UserComment) => id === 823423
)
console.log(`3) Find the comment with id 823423`, commentWithId)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteCommentWithIndex: number = comments.findIndex(
  ({ id }: UserComment) => id === 823423
)
comments.splice(deleteCommentWithIndex, 1)
console.log(`4) Delete the comment with id 823423`, comments)
