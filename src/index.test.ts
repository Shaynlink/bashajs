import TextAttribute from '.';

test('Simple foreground red color attribute', () => {
  console.log('Hello ' + TextAttribute.color('world', 'red') + ' !');
});

test('Simple background red color attribute', () => {
  console.log('Hello ' + TextAttribute.color('world', 'red', false) + ' !');
});

test('Simple reverse attribute', () => {
  console.log('Hello ' + TextAttribute.reverse('world') + ' !');
});

test('Simple bold attribute', () => {
  console.log('Hello ' + TextAttribute.bold('world') + ' !');
});

test('Simple underline attribute', () => {
  console.log('Hello ' + TextAttribute.underline('world') + ' !');
});

test('Create and user custom attribute', () => {
  const textAttribute: TextAttribute = new TextAttribute(
      ['yellow', '38;5;186'],
      ['orange', '93'],
  );

  console.log(
      'Foo ' + textAttribute.customAttribute('orange', 'Bar'));
});

test('Bold + underline + red foreground + blue background', () => {
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
});
