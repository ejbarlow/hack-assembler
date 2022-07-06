class SymbolTable {
  constructor() {
    this.symbols = [];
    this.next = 16;
  }

  addSymbol = (symbol) => {
    symbols.push(symbol);
  };

  addSymbols = (symbols) => {
    symbols.push(...symbols);
    console.log(symbols);
  };

  getAddress = (symbol) => {
    const existingSymbol = symbols.find((sym) => sym.symbol === symbol);

    if (existingSymbol) {
      return existingSymbol.address;
    }

    symbols.push({
      symbol,
      address: next,
    });

    next += 1;
    return symbols[symbols.length - 1].address;
  };
}

export { SymbolTable };
