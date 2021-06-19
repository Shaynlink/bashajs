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
