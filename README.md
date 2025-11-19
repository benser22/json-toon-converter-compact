# json-toon-converter-compact

Librería TypeScript para convertir datos entre JSON y TOON (Token‑Oriented Object Notation) y validar entradas.

## Instalación

```
npm install json-toon-converter-compact
```

## Uso Rápido

### ESM

```
import { jsonToToon, toonToJson, validateToon, validateJson } from 'json-toon-converter-compact'

const toon = jsonToToon({ user: { name: 'Benja', id: 1 } })
const obj = toonToJson('user=(name=Benja\nid=1)')

const errToon = validateToon(toon)        // null si es válido
const errJson = validateJson('{"a":1}')  // null si es válido
```

### CJS

```
const { jsonToToon, toonToJson, validateToon, validateJson } = require('json-toon-converter-compact')
```

## API

- `jsonToToon(input: JSONValue | unknown): string`
  - Serializa objetos/arrays/primitivos JSON a TOON. Objetos anidados se representan entre paréntesis, arrays con `|`.
- `toonToJson(toon: string): JSONValue`
  - Parsea TOON respetando paréntesis y `|`, con inferencia básica de números y booleanos.
- `validateToon(toon: string): string | null`
  - Valida sintaxis TOON (p.ej. balance de paréntesis, entrada no JSON). Devuelve `null` si es válido o mensaje de error.
- `validateJson(jsonStr: string): string | null`
  - Valida una cadena JSON usando `JSON.parse`. Devuelve `null` si es válido o mensaje de error.

## Ejemplos

```
// JSON → TOON
jsonToToon({
  name: 'Alice',
  age: 28,
  active: true,
  skills: ['JavaScript', 'TypeScript'],
  address: { city: 'Madrid', country: 'Spain' }
})
// ->
// name=Alice\nage=28\nactive=true\nskills=JavaScript|TypeScript\naddress=(city=Madrid\ncountry=Spain)

// TOON → JSON
toonToJson('name=Alice\nage=28\nactive=true')
// -> { name: 'Alice', age: 28, active: true }
```

## Tipos

La librería exporta `JSONValue` para tipar entradas y salidas:

```
type JSONValue = string | number | boolean | null | JSONValue[] | { [k: string]: JSONValue }
```

## Limitaciones

- No se escapan caracteres especiales en strings (`|`, `=`, `(`, `)`). Evita incluirlos en valores de texto.
- El parser infiere números y booleanos de forma simple; cadenas se mantienen como texto.

## Licencia

MIT
