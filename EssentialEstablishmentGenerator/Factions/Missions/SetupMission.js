setup.createMission = function (town, base) {
  const difficulty = ['easy', 'easy', 'easy', 'medium', 'medium', 'hard']
  let details
  let readout
  let targetNPC
  let targetLocation
  const mission = Object.assign({
    category: ['thieves', 'alchemist'].seededrandom(),
    difficulty: difficulty.seededrandom(),
    readout,
    details,
    targetNPC,
    targetLocation
  }, base)

  switch (mission.category) {
    case 'thieves':
      setup.thievesMission(mission)
      break
    case 'alchemist':
      setup.alchemistMission(mission)
      break
    case 'bartender':
      setup.bartenderMission(mission)
      break
    case 'merchant':
      setup.merchantMission(mission)
      break
  }

  return mission
}
