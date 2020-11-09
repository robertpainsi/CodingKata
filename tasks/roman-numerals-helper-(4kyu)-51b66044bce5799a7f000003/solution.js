/*
 * This isn't a KISS solution because I wanted to challenge myself by only hard-code the conversion table. That way it's trickier to handle
 * cases like 4, 9, ….
 */
class RomanNumerals {
  static conversionTable = [
    {n: 1000, c: 'M'},
    {n: 500, c: 'D'},
    {n: 100, c: 'C'},
    {n: 50, c: 'L'},
    {n: 10, c: 'X'},
    {n: 5, c: 'V'},
    {n: 1, c: 'I'},
  ];

  static toRoman(n) {
    for (let i = 0; i < this.conversionTable.length; i += 2) {
      const conversion = this.conversionTable[i];
      if (conversion.n > n) {
        continue;
      }

      return this.digitToRoman(this.mostSignificantDigit(n), {
        high: this.conversionTable[i - 2]?.c,
        middle: this.conversionTable[i - 1]?.c,
        low: this.conversionTable[i]?.c,
      }) + this.toRoman(n % conversion.n);
    }
    return '';
  }

  static digitToRoman(n, map) {
    const mapping = this.createRomanMapping(map);
    return mapping[mapping.length - n];
  }

  static mostSignificantDigit(n) {
    return parseInt(n.toString()[0]);
  }

  static fromRoman(number) {
    return parseInt(this._fromRoman(number.toString()));
  }

  static _fromRoman(romanNumber, i = 0) {
    if (romanNumber.length === 0) {
      return '';
    }

    const mapping = this.createRomanMapping({
      high: this.conversionTable[i - 2]?.c,
      middle: this.conversionTable[i - 1]?.c,
      low: this.conversionTable[i]?.c,
    });
    for (let k = 0; k < mapping.length; k++) {
      const pattern = mapping[k];
      if (romanNumber.startsWith(pattern)) {
        return `${mapping.length - k}` + this._fromRoman(romanNumber.substring(pattern.length), i + 2);
      }
    }

    return '0' + this._fromRoman(romanNumber, i + 2);
  }

  static createRomanMapping({high, middle, low}) {
    const mapping = [];
    if (high) {
      mapping.push(`${low}${high}`);
    }
    if (middle) {
      mapping.push(`${middle}${low}${low}${low}`);
      mapping.push(`${middle}${low}${low}`);
      mapping.push(`${middle}${low}`);
      mapping.push(`${middle}`);
      mapping.push(`${low}${middle}`);
    }
    mapping.push(`${low}${low}${low}`);
    mapping.push(`${low}${low}`);
    mapping.push(`${low}`);
    return mapping;
  }
}

export {RomanNumerals};
