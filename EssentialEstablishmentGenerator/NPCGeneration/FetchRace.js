
setup.fetchRace = function (town) {
  console.log('Fetching race...')
  const args = town.baseDemographics
  console.log(args)
  const pool = []
  const namePool = Object.keys(args)
  let totalWeight = 0
  for (const arg in args) {
    pool.push(args[arg])
    totalWeight += args[arg]
  }

  let random = Math.floor(randomFloat(1) * totalWeight)
  for (let i = 0; i < pool.length; i++) {
    random -= pool[i]
    if (random < 0) {
      // eslint-disable-next-line no-var
      var index = i
      break
    }
  }

  return namePool[index]
}
