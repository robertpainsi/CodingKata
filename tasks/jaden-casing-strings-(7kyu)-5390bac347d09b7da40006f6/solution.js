String.prototype.toJadenCase = function () {
    return this.replace(/^.| ./g, (match) => match.toUpperCase());
};
