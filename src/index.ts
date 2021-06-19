export interface Attributes {
  resetAll: string;

  bold: string;
  underline: string;
  reverse: string;

  foregroundDefault: string;
  foregroundBlack: string;
  foregroundRed: string;
  foregroundGreen: string;
  foregroundYellow: string;
  foregroundBlue: string;
  foregroundMagenta: string;
  foregroundCyan: string;
  foregroundLightGray: string;
  foregroundDarkGray: string;
  foregroundLightRed: string;
  foregroundLightGreen: string;
  foregroundLightYellow: string;
  foregroundLightBlue: string;
  foregroundLightMagenta: string;
  foregroundLightCyan: string;
  foregroundWhite: string;

  backgroundDefault: string;
  backgroundBlack: string;
  backgroundRed: string;
  backgroundGreen: string;
  backgroundYellow: string;
  backgroundBlue: string;
  backgroundMagenta: string;
  backgroundCyan: string;
  backgroundLightGray: string;
  backgroundDarkGray: string;
  backgroundLightRed: string;
  backgroundLightGreen: string;
  backgroundLightYellow: string;
  backgroundLightBlue: string;
  backgroundLightMagenta: string;
  backgroundLightCyan: string;
  backgroundWhite: string;

  [key: string]: string;
}

/**
 * Capitalize text
 * @param {string} text - Text modifiable
 * @return {string}
 */
function capitalize(text: string): string {
  return text.substring(0, 1).toUpperCase() + text.substring(1);
};

/**
 * Make Text Attribute
 */
class TextAttribute {
  public attributes: Map<string, string>;

  /**
   * Create custom color
   * @param {[string, string][]} attributes - Set custom color
   */
  constructor(...attributes: [string, string][]) {
    this.attributes = new Map(attributes);
  };

  /**
   * Make custom text
   * @param {string} attribute - Attribute code
   * @param {string} text - Text modifiable
   * @param {boolean} [withReset=true] - Reset Attribute at the end
   * @return {string}
   */
  public customAttribute(
      attribute: string,
      text: string,
      withReset: boolean = true,
  ): string {
    const custom: string = this.attributes.get(attribute) || '0';

    return '\u001b[' +
     custom +
      'm' +
      text + (withReset ? TextAttribute.resetColor() : '');
  };

  /**
   * All attributes
   * @return {Attributes}
   */
  public static attributes(): Attributes {
    return {
      resetAll: '\u001b[0m',

      bold: '\u001b[1m',
      underline: '\u001b[4m',
      reverse: '\u001b[7m',

      foregroundDefault: '\u001b[39m',
      foregroundBlack: '\u001b[30m',
      foregroundRed: '\u001b[31m',
      foregroundGreen: '\u001b[32m',
      foregroundYellow: '\u001b[33m',
      foregroundBlue: '\u001b[34m',
      foregroundMagenta: '\u001b[35m',
      foregroundCyan: '\u001b[36m',
      foregroundLightGray: '\u001b[37m',
      foregroundDarkGray: '\u001b[90m',
      foregroundLightRed: '\u001b[91m',
      foregroundLightGreen: '\u001b[92m',
      foregroundLightYellow: '\u001b[93m',
      foregroundLightBlue: '\u001b[94m',
      foregroundLightMagenta: '\u001b[95m',
      foregroundLightCyan: '\u001b[96m',
      foregroundWhite: '\u001b[97m',

      backgroundDefault: '\u001b[49m',
      backgroundBlack: '\u001b[40m',
      backgroundRed: '\u001b[41m',
      backgroundGreen: '\u001b[42m',
      backgroundYellow: '\u001b[43m',
      backgroundBlue: '\u001b[44m',
      backgroundMagenta: '\u001b[45m',
      backgroundCyan: '\u001b[46m',
      backgroundLightGray: '\u001b[47m',
      backgroundDarkGray: '\u001b[100m',
      backgroundLightRed: '\u001b[101m',
      backgroundLightGreen: '\u001b[102m',
      backgroundLightYellow: '\u001b[103m',
      backgroundLightBlue: '\u001b[104m',
      backgroundLightMagenta: '\u001b[105m',
      backgroundLightCyan: '\u001b[106m',
      backgroundWhite: '\u001b[107m',
    };
  };
  /**
   * Reset all attributes
   * @return {string}
   */
  public static resetAll(): string {
    return TextAttribute.attributes().resetAll;
  };

  /**
   * Reset all color attributes
   * @return {string}
   */
  public static resetColor(): string {
    return '' + TextAttribute.attributes().backgroundDefault +
      TextAttribute.attributes().foregroundDefault;
  };

  /**
   * Make bold text
   * @param {string} text - text modifiable
   * @return {string}
   */
  public static bold(text: string): string {
    return TextAttribute.attributes().bold +
      text +
      TextAttribute.attributes().resetAll;
  };

  /**
   * Make underline text
   * @param {string} text - text modifiable
   * @return {string}
   */
  public static underline(text: string): string {
    return TextAttribute.attributes().underline +
      text +
      TextAttribute.attributes().resetAll;
  };

  /**
   * Make reverse text
   * @param {string} text - text modifiable
   * @return {string}
   */
  public static reverse(text: string): string {
    return TextAttribute.attributes().reverse +
      text +
      TextAttribute.attributes().resetAll;
  };

  /**
   * Make color text
   * @param {string} text - Text modifiable
   * @param {string} color - defined color
   * @param {boolean} [forground=true] - Choose ground
   * @return {string}
   */
  public static color(
      text: string,
      color: string,
      forground: boolean = true,
  ): string {
    const ground: string = forground ? 'foreground' : 'background';
    color = ground + capitalize(color);

    if (!TextAttribute.attributes()[color]) {
      throw Error(color + ' is not a valid color');
    }

    return TextAttribute.attributes()[color] +
      text +
      TextAttribute.attributes()[ground + 'Default'];
  };
};

export default TextAttribute;
export {TextAttribute};
