class SymbolTable {
  constructor() {
    this.symbols = [];
    this.next = 16;
  }

  addSymbol = (symbol) => {
    this.symbols.push(symbol);
  };

  addSymbols = (symbols) => {
    this.symbols.push(...symbols);
  };

  getAddress = (symbol) => {
    if (!isNaN(symbol)) {
      return parseInt(symbol);
    }
    const existingSymbol = this.symbols.find((sym) => sym.symbol === symbol);

    if (existingSymbol) {
      return existingSymbol.address;
    }

    this.addSymbol({
      symbol,
      address: this.next,
    });

    this.next += 1;
    return this.symbols[this.symbols.length - 1].address;
  };
}

export { SymbolTable };
