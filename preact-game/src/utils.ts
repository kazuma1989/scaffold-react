export function nonNull<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

export function shuffle<T>(target: readonly T[]): T[] {
  const array = [...target]

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[j]
    array[j] = array[i]
    array[i] = temp
  }

  return array
}

export function randomChoice<T>(
  target: readonly T[],
  numOfChoice: number,
): T[] {
  const array = [...target]

  const choice: T[] = []
  for (let i = array.length - 1; i >= 0; i--) {
    if (choice.length === numOfChoice) {
      break
    }

    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[j]
    array[j] = array[i]
    array[i] = temp

    choice.push(temp)
  }

  return choice
}

export function random() {
  return Math.random()
    .toString(36)
    .slice(2)
}

export function uniqueSortInsert<T>(
  arr: T[],
  item: T,
  compare: (i1: T, i2: T) => number,
): T[] {
  const i = arr.findIndex(v => compare(v, item) >= 0)

  // v < item
  if (i === -1) {
    return [...arr, item]
  }

  // v == item
  if (compare(arr[i], item) === 0) {
    return arr
  }

  // v > item
  const newArr = [...arr]
  newArr.splice(i, 0, item)
  return newArr
}
