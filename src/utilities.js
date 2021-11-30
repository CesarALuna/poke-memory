export const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5)
}

export const pokemonArr = Array(151)
  .fill()
  .map((_, i) => i + 1)
  .sort(() => Math.random() - 0.5)
