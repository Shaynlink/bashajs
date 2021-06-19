# Bashajs

Bash attribute js is a simple module for make text attribute and prettier on console

Forground color

<img src="https://www.lihaoyi.com/post/Ansi/Rainbow256.png">

Background color

<img src="https://www.lihaoyi.com/post/Ansi/RainbowBackground256.png">

Attributes text

<img src="https://www.lihaoyi.com/post/Ansi/DecorationTogether.png">

# Installation

```bash
# npm installer
npm install bashajs

# yarn installer
yarn add bashajs
```

# Documentation

## Import module
```js
// CommonJS
const {TextAttribute} = require('bashajs');

// ECMAScript
import TextAttribute from 'bashajs';
```

## TextAttribute
Create custom color

Params
- `[string, string][]` attributes - Set custom color

Example
```js
const ta = new TextAttribute(
  ['yellow', '38;5;186'],
  // you can add other color
  ['orange', '93'],
)
```

## customAttribute
Make custom text

Params
- `string` attribute - Attribute code
- `string` text - Text modifiable
- `boolean` [withReset=true] - Reset Attribute at the end

Return `string`

Example
```js
const ta = new TextAttribute(['yellow', '38;5;186']);

// Reset attribute
console.log(
  'foo ' +
  ta.customAttribute('yellow', 'bar', true) +
  " this text hasn't same attribute"
);

// Not reset attribute
console.log(
  'foo ' +
  ta.customAttribute('yellow', 'bar', false) +
  " this text has same attribute"
);
```

## [static] attributes
Get all static attributes

Return `void`

Example
```js
// Object with all static attribute
console.log(TextAttribute.attributes());

// Get bold attribute
console.log(TextAttribute.attributes().bold);
```

## [static] resetAll
Reset all attributes

Return `string`
```js
console.log(TextAttribute.resetAll());
```

## [static] resetColor
Reset all color attributes (background + foreground)

return `string`
```js
console.log(TextAttribute.resetColor());
```

## [static] bold
Make bold text

Params
- `string` text - text modifiable

return `string`
```js
console.log(TextAttribute.bold('Hello world !'));
```

## [static] underline
Make underline text

Params
- `string` text - text modifiable

return `string`
```js
console.log(TextAttribute.underline('Hello world !'));
```

## [static] reverse
Make reverse text

Params
- `string` text - text modifiable

return `string`

```js
console.log(TextAttribute.reverse('Hello world !'));
```

## [static] color
Make color text

Params
- `string` text - Text modifiable
- `string` color - defined color
- `boolean` [forground=true] - Choose ground between foreground or background

return `string`
```js
// foreground
console.log(TextAttribute.color('Hello world', 'red'));

// background
console.log(TextAttribute.color('Hello world', 'red', false));
```

# static attribute

```js
{
  default
  black
  red
  green
  yellow
  blue
  magent
  cyan
  lightGray
  darkGray
  lightRed
  lightGreen
  lightYellow
  lightBlue
  lightMagenta
  lightCyan
  white
}
```
# Example

## add color after instance

```js
const ta = new TextAttribute(['yellow', '38;5;186']);

// add new color
ta.attributes.set('orange', '93');
```

## Simple example

[see file test](https://github.com/Shaynlink/bashajs/blob/main/tests/simple.js)

```js
const {TextAttribute} = require('../dist');

console.log('Hello ' + TextAttribute.color('world', 'red') + ' !');

console.log('Hello ' + TextAttribute.color('world', 'red', false) + ' !');

console.log('Hello ' + TextAttribute.reverse('world') + ' !');

console.log('Hello ' + TextAttribute.bold('world') + ' !');

console.log('Hello ' + TextAttribute.underline('world') + ' !');

const textAttribute = new TextAttribute(['yellow', '38;5;186']);

console.log(
    'Hello ' + textAttribute.customAttribute('yellow', 'world') + ' !');

textAttribute.setCustomAttribute('93', 'orange');

console.log(
    'Foo ' + textAttribute.customAttribute('orange', 'Bar'));

console.log(
    'Hello ' +
    TextAttribute.bold(
        TextAttribute.underline(
            TextAttribute.color( // foreground
                TextAttribute.color('World', 'blue', false), // background
                'red',
            ),
        ),
    ) +
    ' !',
);
```

## Panel example

[see file test](https://github.com/Shaynlink/bashajs/blob/main/tests/simple.js)
```js
let printer = [];

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    code = String(i * 16 + j);
    printer.push('\u001b[38;5;' + code + 'm ' + code);
  };
};

console.log(printer.join(' ') + '\u001b[0m');

printer = [];

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    code = String(i * 16 + j);
    printer.push('\u001b[48;5;' + code + 'm ' + code);
  };
};

console.log(printer.join(' ') + '\u001b[0m');
```

(￣ε(#￣) it's me shayn