import {Delimiters} from '../delimiters';
import {EdiBuilder} from './edi-builder';

export class IsaBuilder extends EdiBuilder {

  constructor(segment: string, delimiters: Delimiters) {
    super(segment, delimiters, '1000');
  }

  override setDescriptions() {
    this.setIdAndDescription(1, 'ISA01', 'type of authorization');
    this.setIdAndDescription(2, 'ISA02', 'actual authorization info');
    this.setIdAndDescription(3, 'ISA03', 'type of security info');
    this.setIdAndDescription(4, 'ISA04', 'actual security info');
    this.setIdAndDescription(5, 'ISA05', 'code identifying the sender\'s ID type');
    this.setIdAndDescription(6, 'ISA06', 'sender\'s ID');
    this.setIdAndDescription(7, 'ISA07', 'code identifying the receiver\'s ID type');
    this.setIdAndDescription(8, 'ISA08', 'receiver\'s ID');
    this.setIdAndDescription(9, 'ISA09', 'date in YYMMDD format');
    this.setIdAndDescription(10, 'ISA10', 'time in HHMM format');
    this.setIdAndDescription(11, 'ISA11', 'control standards ID');
    this.setIdAndDescription(12, 'ISA12', 'interchange control version number');
    this.setIdAndDescription(13, 'ISA13', 'interchange control number');
    this.setIdAndDescription(14, 'ISA14', 'acknowledgement requested');
    this.setIdAndDescription(15, 'ISA15', 'usage indicator (P for Production; T for Test)');
    this.setIdAndDescription(16, 'ISA16', 'component element separator');
  }
}
