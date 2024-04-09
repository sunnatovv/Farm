class RomanNumerals {
  static toRoman(n) {
    const symVal = [
      { symbol: 'M', value: 1000 },
      { symbol: 'CM', value: 900 },
      { symbol: 'D', value: 500 },
      { symbol: 'CD', value: 400 },
      { symbol: 'C', value: 100 },
      { symbol: 'XC', value: 90 },
      { symbol: 'L', value: 50 },
      { symbol: 'XL', value: 40 },
      { symbol: 'X', value: 10 },
      { symbol: 'IX', value: 9 },
      { symbol: 'V', value: 5 },
      { symbol: 'IV', value: 4 },
      { symbol: 'I', value: 1 },
    ];

    let rimNum = '';
    symVal.forEach(({ symbol, value }) => {
      while (n >= value) {
        rimNum += symbol;
        n -= value;
      }
    });

    return rimNum;
  }

  static fromRoman(s) {
    const symVal = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let result = 0;
    let val = 0;

    for (let symbol of s) {
      const value = symVal[symbol];
      if (value > val) {
        result += value - 2 * val;
      } else {
        result += value;
      }
      val = value;
    }

    return result;
  }
}
