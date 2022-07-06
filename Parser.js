import { createInterface } from 'readline';
import { createReadStream } from 'fs';

class Parser {
  constructor(input) {
    this.source = [];
    this.count = 0;

    const lineStream = createInterface({
      input: createReadStream(input),
      crlfDelay: Infinity,
    });

    lineStream.on('line', (line) => {
      const instructionObject = this.parseLine(line);
      if (instructionObject) {
        console.log(instructionObject);
        this.source.push(instructionObject);
      }
    });
  }

  parseLine = (line) => {
    const commentPattern = new RegExp(/\/\/.*/);
    let filteredLine = line.replace(commentPattern, '').trim();

    if (filteredLine?.length) {
      switch (filteredLine[0]) {
        case '@':
          // If symbol, value as a string
          // Else, value as number
          this.count += 1; // Included in assembled code
          return {
            type: 'A',
            value: isNaN(parseInt(filteredLine.substring(1)))
              ? filteredLine.substring(1)
              : parseInt(filteredLine.substring(1)),
          };
        case '(':
          // Don't increment, not in assembled code
          return {
            type: 'PSEUDO',
            label: filteredLine.match(/\((.*)\)/)[1],
          };
        default:
          // C instruction
          // Initialise the object
          const instructionObject = {
            type: 'C',
          };
          // Populate it
          if (filteredLine.indexOf(';') > -1) {
            const [trimmedLine, jump] = filteredLine.split(';');
            instructionObject.jump = jump;
            filteredLine = trimmedLine;
          }
          if (filteredLine?.indexOf('=') > -1) {
            const [dest, comp] = filteredLine.split('=');
            instructionObject.dest = dest;
            instructionObject.comp = comp;
          } else {
            instructionObject.comp = filteredLine;
          }
          // Present in assembled code, increment count
          this.count += 1;
          return instructionObject;
      }
    }
  };
}

export { Parser };
