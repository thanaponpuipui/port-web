module.exports = class TypeValidator {
    static isString (value) {
        return typeof value === "string";
    };
    static isNumber (value) {
        return typeof value === "number";
    };
}
