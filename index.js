import { SymbolTable } from './SymbolTable.js';
import { Parser } from './Parser.js';

/*****************
 * Pre iteration
 *****************/
// Initialise a symbol table
const sym = new SymbolTable();
// Populate with predefined symbols
sym.addSymbols([
  { symbol: 'R0', address: 0 },
  { symbol: 'R1', address: 1 },
  { symbol: 'R2', address: 2 },
  { symbol: 'R3', address: 3 },
  { symbol: 'R4', address: 4 },
  { symbol: 'R5', address: 5 },
  { symbol: 'R6', address: 6 },
  { symbol: 'R7', address: 7 },
  { symbol: 'R8', address: 8 },
  { symbol: 'R9', address: 9 },
  { symbol: 'R10', address: 10 },
  { symbol: 'R11', address: 11 },
  { symbol: 'R12', address: 12 },
  { symbol: 'R13', address: 13 },
  { symbol: 'R14', address: 14 },
  { symbol: 'R15', address: 15 },
  { symbol: 'SP', address: 0 },
  { symbol: 'LCL', address: 1 },
  { symbol: 'ARG', address: 2 },
  { symbol: 'THIS', address: 3 },
  { symbol: 'THAT', address: 4 },
  { symbol: 'SCREEN', address: 16384 },
  { symbol: 'KBD', address: 24576 },
]);

/**************
 * First pass
 **************/
// Initialise the parser with the source file
const parser = new Parser('./asm/Max.asm');
// Iterate through lines from the parser
// Should return command object with `type` "A"|"C"|"PSEUDO"
// "A" contains a `value` as a string (label) or number (address)
// "C" contains `comp` and optionally `jump` and `dest`
// "PSEUDO" contains a `label` to be used with the symbol table
// Only concerned with `PSEUDO` here, add the symbols to the table
/***************
 * Second pass
 ***************/
// Iterate through lines from the parser
// = "A" command =====
// If `value` is a string, get the address from the symbol table
//    (Symbol table should add any new symbols from 16)
// Get the machine code and append it to the output
// = "C" command =====
// Get the machine code and append it to the output
// Skip any "PSEUDO" commands
/******************
 * Post iteration
 ******************/
// Save the output
