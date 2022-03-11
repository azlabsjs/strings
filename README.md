# Documentation

# Strings

JavaScript Strings manipulation utilities

# Example Usage

import the entire core set of functionality

```ts
import { after, afterLast, before, beforeLast, toBinary } from '../src';
```

## afterLast()

- Return **World!** when afterLast(" ", "Hello World!") is called

```ts
afterLast(' ', ' Hello World!');
```

## after()

- Return **World!** when after("o", "Hello World!") is called

```ts
after('o', 'Hello World!');
```

## before()

- Return **Hello** when before("W", "Hello World!") is called

```ts
before('W', 'Hello World!');
```

## beforeLast()

- Return **Hello** when beforeLast("o", "Hello World!") is called

```ts
beforeLast('o', 'Hello World!');
```

## toBinary()

- Return "" for toBinary("Hello World!")

```ts
const str = toBinary('Hello World!');
```
