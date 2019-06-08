
setup.createMagic = function (type) {
  console.log('type: ' + type)
  let magic
  if (type === 'ring') {
    magic = setup.createRing()
    console.log('Ring!')
    console.log(magic)
    return magic
  }
  const length = setup.magicData[type].property.length
  console.log('Length:' + length)
  const prefixRoll = random(1, length)
  const suffixRoll = random(1, length)
  magic = {
    type: setup.magicData[type].type.seededrandom(),
    prefix: setup.magicData[type].prefix[prefixRoll],
    suffix: setup.magicData[type].suffix[suffixRoll],
    prefixProperty: setup.magicData[type].property[prefixRoll],
    suffixProperty: setup.magicData[type].property[suffixRoll]
  }
  magic.description = magic.prefixProperty + '. ' + magic.suffixProperty
  magic.name = magic.prefix + ' ' + magic.type + ' ' + magic.suffix
  console.log(magic)
  return magic
}
