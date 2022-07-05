/*****************
 * Pre iteration
 *****************/
// Initialise a symbol table
// Populate with predefined symbols
/**************
 * First pass
 **************/
// Iterate through lines from the parser
// Should return command object with `type` "A"|"C"|"PSEUDO"
// "A" contains a `value` as a string (label) or number (address)
// "C" contains `comp` and optionally `jump` and `dest`
// "PSEUDO" contains a `label` and corresponding value to be added to the symbol table
// Only concerned with `PSEUDO` here, add the symbols to the table
/***************
 * Second pass
 ***************/
// Iterate through lines from the parser
// = "A" command =====
// If `value` is a number, get the address from the symbol table
//    (Symbol table should add any new symbols from 16)
// Get the machine code and append it to the output
// = "C" command =====
// Get the machine code and append it to the output
// Skip any "PSEUDO" commands
/******************
 * Post iteration
 ******************/
// Save the output
