import { getValidParameters } from "."
import { booleanParameter } from "./types/boolean"
import { numberParameter } from "./types/number"
import { optionally } from "./types/optional"
import { stringParameter } from "./types/string"

describe('getValid', () => {
  it('should work for a (formatted) query string', () => {
    const query = {
      name: 'John Doe',
      age: '42',
      isAlive: 'true',
    }

    const { name, age, isAlive, isHappy } = getValidParameters({
      name: stringParameter(),
      age: numberParameter(),
      isAlive: booleanParameter(),
      isHappy: optionally(booleanParameter()),
    }, query)

    expect(name).toBe('John Doe')
    expect(age).toBe(42)
    expect(isAlive).toBe(true)
    expect(isHappy).toBe(undefined)
  })
})
