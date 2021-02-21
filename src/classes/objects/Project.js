const { TypeValidator } = require("../utils");

module.exports = class Project {
    constructor ({title, description="", link={}, postTime, lastUpdate}) {
        this._title = title;
        this._description = description;
        this._link = link;
        this._postTime = postTime;
        this._lastUpdate = lastUpdate;
    };

    get title () {
        if (TypeValidator.isString(this._title)) {
            return this._title.toUpperCase();
        }
    };
    set title (title) {
        if (TypeValidator.isString(title)) {
            this._title = title;
        }
    };

    get description () {
        if (TypeValidator.isString(this._description)) {
            return this._description;
        }
    };
    set description (description) {
        if (TypeValidator.isString(description)) {
            this._description = description;
        }
    };

    set link ({github, url}) {
        if (github) {
            this._link.github = github;
        }
        if (url) {
            this._link.url = url;
        }
    };
    get link () {
        return this._link;
    };
}
