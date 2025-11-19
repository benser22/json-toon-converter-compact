import { jsonToToon, toonToJson, validateToon, validateJson } from 'json-toon-converter-compact'

const toon = jsonToToon({ user: { name: 'Benja', id: 1 } })
console.log('TOON:', toon)
console.log('Back:', toonToJson('user=(name=Benja\nid=1)'))
console.log('validateToon:', validateToon(toon))
console.log('validateJson:', validateJson('{"a":1}'))