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
 * Make Text Attribute
 */
declare class TextAttribute {
    attributes: Map<string, string>;
    /**
     * Create custom color
     * @param {[string, string][]} attributes - Set custom color
     */
    constructor(...attributes: [string, string][]);
    /**
     * Make custom text
     * @param {string} attribute - Attribute code
     * @param {string} text - Text modifiable
     * @param {boolean} [withReset=true] - Reset Attribute at the end
     * @return {string}
     */
    customAttribute(attribute: string, text: string, withReset?: boolean): string;
    /**
     * All attributes
     * @return {Attributes}
     */
    static attributes(): Attributes;
    /**
     * Reset all attributes
     * @return {string}
     */
    static resetAll(): string;
    /**
     * Reset all color attributes
     * @return {string}
     */
    static resetColor(): string;
    /**
     * Make bold text
     * @param {string} text - text modifiable
     * @return {string}
     */
    static bold(text: string): string;
    /**
     * Make underline text
     * @param {string} text - text modifiable
     * @return {string}
     */
    static underline(text: string): string;
    /**
     * Make reverse text
     * @param {string} text - text modifiable
     * @return {string}
     */
    static reverse(text: string): string;
    /**
     * Make blink text
     * @param {string} text - Text modifiable
     * @param {string} color - defined color
     * @param {boolean} [forground=true] - Choose ground
     * @return {string}
     */
    static color(text: string, color: string, forground?: boolean): string;
}
export default TextAttribute;
export { TextAttribute };
//# sourceMappingURL=index.d.ts.map