class Code {
  constructor() {
    this.compTable = [
      { instruction: '0', bits: '0101010' },
      { instruction: '1', bits: '0111111' },
      { instruction: '-1', bits: '0111010' },
      { instruction: 'D', bits: '0001100' },
      { instruction: 'A', bits: '0110000' },
      { instruction: '!D', bits: '0001101' },
      { instruction: '!A', bits: '0110001' },
      { instruction: '-D', bits: '0001111' },
      { instruction: '-A', bits: '0110011' },
      { instruction: 'D+1', bits: '0011111' },
      { instruction: 'A+1', bits: '0110111' },
      { instruction: 'D-1', bits: '0001110' },
      { instruction: 'A-1', bits: '0110010' },
      { instruction: 'D+A', bits: '0000010' },
      { instruction: 'D-A', bits: '0010011' },
      { instruction: 'A-D', bits: '0000111' },
      { instruction: 'D&A', bits: '0000000' },
      { instruction: 'D|A', bits: '0010101' },
      { instruction: 'M', bits: '1110000' },
      { instruction: '!M', bits: '1110001' },
      { instruction: '-M', bits: '1110011' },
      { instruction: 'M+1', bits: '1110111' },
      { instruction: 'M-1', bits: '1110010' },
      { instruction: 'D+M', bits: '1000010' },
      { instruction: 'D-M', bits: '1010011' },
      { instruction: 'M-D', bits: '1000111' },
      { instruction: 'D&M', bits: '1000000' },
      { instruction: 'D|M', bits: '1010101' },
    ]

    this.jumpTable = [
      { instruction: undefined, bits: '000' },
      { instruction: 'JGT', bits: '001' },
      { instruction: 'JEQ', bits: '010' },
      { instruction: 'JGE', bits: '011' },
      { instruction: 'JLT', bits: '100' },
      { instruction: 'JNE', bits: '101' },
      { instruction: 'JLE', bits: '110' },
      { instruction: 'JMP', bits: '111' },
    ]
  }

  getMachineCode = (inst) => {
    switch (inst.type) {
      case 'A':
        const binaryValue = inst.value.toString(2);
        return `0${this.pad15(binaryValue)}`;
      case 'C':
        let destBits;
        const compBits = this.compTable.find(ins => ins.instruction === inst.comp).bits;
        if (inst.dest) {
          const d1 = inst.dest.includes('A') ? '1' : '0';
          const d2 = inst.dest.includes('D') ? '1' : '0';
          const d3 = inst.dest.includes('M') ? '1' : '0';
          destBits = `${d1}${d2}${d3}`;
        } else {
          destBits = '000';
        }
        const jumpBits = this.jumpTable.find(ins => ins.instruction === inst.jump).bits;
        return `111${compBits}${destBits}${jumpBits}`;
      default:
        console.error(`Unrecognised instruction type '${inst.type}'`);
        break;
    }
  }

  pad15 = (str) => {
    let str15 = str;
    while (str15.length < 15) {
      str15 = `0${str15}`;
    }
    return str15;
  }
}

export { Code }
