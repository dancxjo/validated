import { getValidParameters, makeEnvironment } from "."
import { booleanParameter } from "./types/boolean"
import { numberParameter } from "./types/number"
import { optionally } from "./types/optional"
import { stringParameter } from "./types/string"

describe('getValidParameters', () => {
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

describe('makeEnvironment', () => {

   const environment = makeEnvironment({
    DB_HOST: stringParameter(),
    DB_PORT: numberParameter(),
    DB_USER: stringParameter(),
    DB_PASSWORD: stringParameter(),
    ENABLE_CACHE: booleanParameter(),
    CACHE_EXPIRATION: optionally(numberParameter()),
  });


  it('returns expected values from environment variables', () => {
    process.env.DB_HOST = 'localhost';
    process.env.DB_PORT = '3306';
    process.env.DB_USER = 'user';
    process.env.DB_PASSWORD = 'password';
    process.env.ENABLE_CACHE = 'true';
    process.env.CACHE_EXPIRATION = '3600';

    expect(environment.DB_HOST).toBe('localhost');
    expect(environment.DB_PORT).toBe(3306);
    expect(environment.DB_USER).toBe('user');
    expect(environment.DB_PASSWORD).toBe('password');
    expect(environment.ENABLE_CACHE).toBe(true);
    expect(environment.CACHE_EXPIRATION).toBe(3600);
  });

  it('throws an error for an undeclared environment variable', () => {
    // This is a hack to get around the fact that TypeScript doesn't allow you to access nonsense
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => (environment as unknown as any)['UNDECLARED_VARIABLE']).toThrowError(TypeError);
  });
});

