# Validated Parameters

This library simplifies the process of validating and converting string maps, such as query strings or environment variables, into well-typed data structures. It is particularly useful for quickly setting up a well-typed environment for your application.

## Installation

```bash
npm install --save validated-parameters
```

## Usage

### Example: Azure Function HTTP Trigger

Here's an example of how to use `validated-parameters` to validate and convert query string parameters in an Azure Function HTTP trigger:

1. Import the required functions and types:

```typescript
import {
  getValidParameters,
  stringParameter,
  numberParameter,
  booleanParameter,
  optionally,
} from 'validated-parameters';
```

2. Define the expected parameter map:

```typescript
const parameterMap = {
  searchText: stringParameter(),
  page: numberParameter(),
  pageSize: numberParameter(),
  includeArchived: booleanParameter(),
};
```

3. Use `getValidParameters` in your Azure Function:

```typescript
import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const { searchText, page, pageSize, includeArchived } = getValidParameters(parameterMap, req.query);

  // Your logic for handling the request with validated and converted parameters.
};

export default httpTrigger;
```

### Setting up a Well-Typed Environment

`validated-parameters` can be used to create a well-typed environment for your application. In this example, we will set up a centralized, well-typed environment using environment variables:

1. Create a file named `environment.ts`:

```typescript
import {
  makeEnvironment,
  stringParameter,
  numberParameter,
  booleanParameter,
  optionally,
} from 'validated-parameters';

const environmentVariables = {
  DB_HOST: stringParameter(),
  DB_PORT: numberParameter(),
  DB_USER: stringParameter(),
  DB_PASSWORD: stringParameter(),
  ENABLE_CACHE: booleanParameter(),
  CACHE_EXPIRATION: optionally(numberParameter()),
};

export const environment = makeEnvironment(environmentVariables);
```

2. Use the `environment` object in your application:

```typescript
import { environment } from './environment';

console.log(environment.DB_HOST);
console.log(environment.DB_PORT);
console.log(environment.DB_USER);
console.log(environment.DB_PASSWORD);
console.log(environment.ENABLE_CACHE);
console.log(environment.CACHE_EXPIRATION);
```

The `environment` object provides well-typed access to environment variables, ensuring that your application always uses the correct data types.

### Customization

`validated-parameters` also allows you to customize the validation and conversion process by providing optional configuration. For example:

```typescript
const customParameterMap = {
  name: stringParameter({
    minLength: 2,
    maxLength: 100,
    onInvalid: (value) => console.warn(`Invalid name: ${value}`),
  }),
  age: numberParameter({
    min: 18,
    max: 120,
    onInvalid: (value) => console.warn(`Invalid age: ${value}`),
  }),
  isAlive: booleanParameter({
    onFailedToConvert: (value, error) => console.error(`Failed to convert isAlive: ${value}`, error),
  }),
  isHappy: optionally(booleanParameter()),
};
```
