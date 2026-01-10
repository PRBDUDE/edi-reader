import {Delimiters} from './delimiters';
import {Element} from './element';

describe('Element', () => {
  let delimiters: Delimiters;
  const isa = 'ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:~';

  beforeEach(() => {
    delimiters = new Delimiters(isa);
  });

  describe('get ISA elements', () => {
    const isaElements: Element[] = new Array<Element>();

    beforeEach(() => {
      const isa00 = new Element(isa.split(String(delimiters.getElementDelimiter()))[0], delimiters);
      isa00.setSegmentId('ISA00');
      isa00.setDescription('ISA segment');
      isaElements.push(isa00);
      const isa01 = new Element(isa.split(String(delimiters.getElementDelimiter()))[1], delimiters);
      isa01.setSegmentId('ISA01');
      isa01.setDescription('type of authorization');
      isaElements.push(isa01);
      const isa02 = new Element(isa.split(String(delimiters.getElementDelimiter()))[2], delimiters);
      isa02.setSegmentId('ISA02');
      isa02.setDescription('actual authorization info');
      isaElements.push(isa02);
      const isa03 = new Element(isa.split(String(delimiters.getElementDelimiter()))[3], delimiters);
      isa03.setSegmentId('ISA03');
      isa03.setDescription('type of security info');
      isaElements.push(isa03);
      const isa04 = new Element(isa.split(String(delimiters.getElementDelimiter()))[4], delimiters);
      isa04.setSegmentId('ISA04');
      isa04.setDescription('actual security info');
      isaElements.push(isa04);
      isaElements.push(new Element(isa.split(String(delimiters.getElementDelimiter()))[5], delimiters));
      isaElements.push(new Element(isa.split(String(delimiters.getElementDelimiter()))[6], delimiters));
      isaElements.push(new Element(isa.split(String(delimiters.getElementDelimiter()))[7], delimiters));
      isaElements.push(new Element(isa.split(String(delimiters.getElementDelimiter()))[8], delimiters));
      isaElements.push(new Element(isa.split(String(delimiters.getElementDelimiter()))[9], delimiters));
      isaElements.push(new Element(isa.split(String(delimiters.getElementDelimiter()))[10], delimiters));
      isaElements.push(new Element(isa.split(String(delimiters.getElementDelimiter()))[11], delimiters));
      isaElements.push(new Element(isa.split(String(delimiters.getElementDelimiter()))[12], delimiters));
      isaElements.push(new Element(isa.split(String(delimiters.getElementDelimiter()))[13], delimiters));
      isaElements.push(new Element(isa.split(String(delimiters.getElementDelimiter()))[14], delimiters));
      isaElements.push(new Element(isa.split(String(delimiters.getElementDelimiter()))[15], delimiters));
      isaElements.push(new Element(isa.split(String(delimiters.getElementDelimiter()))[16], delimiters));
    });

    it('should get element[0].getElement() as \'ISA\'', () => {
      expect(isaElements[0].getElement()).toEqual('ISA');
    });

    it('should get element[0].isSubElement() as \'False\'', () => {
      expect(isaElements[0].isSubElement()).toBeFalse();
    });

    it('should get element[0].getSegmentId() as \'ISA00\'', () => {
      expect(isaElements[0].getSegmentId()).toEqual('ISA00');
    });

    it('should get element[0].isDescription() as \'ISA segment\'', () => {
      expect(isaElements[0].getDescription()).toEqual('ISA segment');
    });

    it('should get element[1].getElement() as \'00\'', () => {
      expect(isaElements[1].getElement()).toEqual('00');
    });

    it('should get element[1].isSubElement() as \'False\'', () => {
      expect(isaElements[1].isSubElement()).toBeFalse();
    });

    it('should get element[1].getSegmentId() as \'ISA01\'', () => {
      expect(isaElements[1].getSegmentId()).toEqual('ISA01');
    });

    it('should get element[1].getDescription() as \'type of authorization\'', () => {
      expect(isaElements[1].getDescription()).toEqual('type of authorization');
    });

    it('should get element[2].getElement() as \'          \'', () => {
      expect(isaElements[2].getElement()).toEqual('          ');
      expect(isaElements[2].isSubElement()).toBeFalse();
      expect(isaElements[2].getSegmentId()).toEqual('ISA02');
      expect(isaElements[2].getDescription()).toEqual('actual authorization info');
    });

    it('should get element[3].getElement() as \'00\'', () => {
      expect(isaElements[3].getElement()).toEqual('00');
    });

    it('should get element[4].getElement() as \'          \'', () => {
      expect(isaElements[4].getElement()).toEqual('          ');
    });

    it('should get element[5].getElement() as \'ZZ\'', () => {
      expect(isaElements[5].getElement()).toEqual('ZZ');
    });

    it('should get element[6].getElement() as \'87790056      \'', () => {
      expect(isaElements[6].getElement()).toEqual('87790056      ');
    });

    it('should get element[7].getElement() as \'ZZ\'', () => {
      expect(isaElements[7].getElement()).toEqual('ZZ');
    });

    it('should get element[8].getElement() as \'576687090     \'', () => {
      expect(isaElements[8].getElement()).toEqual('576687090     ');
    });

    it('should get element[9].getElement() as \'251107\'', () => {
      expect(isaElements[9].getElement()).toEqual('251107');
    });

    it('should get element[10].getElement() as \'1430\'', () => {
      expect(isaElements[10].getElement()).toEqual('1430');
    });

    it('should get element[11].getElement() as \'^\'', () => {
      expect(isaElements[11].getElement()).toEqual('^');
    });

    it('should get element[12].getElement() as \'00501\'', () => {
      expect(isaElements[12].getElement()).toEqual('00501');
    });

    it('should get element[13].getElement() as \'000000905\'', () => {
      expect(isaElements[13].getElement()).toEqual('000000905');
    });

    it('should get element[14].getElement() as \'0\'', () => {
      expect(isaElements[14].getElement()).toEqual('0');
    });

    it('should get element[15].getElement() as \'T\'', () => {
      expect(isaElements[15].getElement()).toEqual('T');
    });

    it('should get element[16].getElement() as \':\'', () => {
      expect(isaElements[16].getElement()).toEqual(':');
    });
  })

  describe('get sub elements', () => {
    const tstElements: Element[] = new Array<Element>();
    const tst = 'TST*1:2:3*a:b:c:d~';

    beforeEach(() => {
      const tst00 = new Element(tst.split(String(delimiters.getElementDelimiter()))[0], delimiters);
      tst00.setSegmentId('TST00');
      tst00.setDescription('Test segment');
      tst00.setError('Test error message 0');
      tstElements.push(tst00);
      const tst01 = new Element(tst.split(String(delimiters.getElementDelimiter()))[1], delimiters);
      tst01.setSegmentId('TST01');
      tst01.setDescription('Test sub element 1');
      tst01.setError('Test error message 1');
      tstElements.push(tst01);
      const tst02 = new Element(tst.split(String(delimiters.getElementDelimiter()))[2], delimiters);
      tst02.setSegmentId('TST02');
      tst02.setDescription('Test sub element 2');
      tst02.setError('Test error message 2');
      tstElements.push(tst02);
    });

    it('should get element[0].getElement() as \'TST\'', () => {
      expect(tstElements[0].getElement()).toEqual('TST');
    });

    it('should get element[0].isSubElement() as \'false\'', () => {
      expect(tstElements[0].isSubElement()).toBeFalse();
    });

    it('should get element[0].getSegmentId() as \'TST00\'', () => {
      expect(tstElements[0].getSegmentId()).toEqual('TST00');
    });

    it('should get element[0].getDescription() as \'Test segment\'', () => {
      expect(tstElements[0].getDescription()).toEqual('Test segment');
    });

    it('should get element[0].isError() as \'True\'', () => {
      expect(tstElements[0].isError()).toBeTrue();
    });

    it('should get element[0].getError() as \'Test error message 0\'', () => {
      expect(tstElements[0].getError()).toEqual('Test error message 0');
    });

    it('should get element[1].getElement() as \'1:2:3\'', () => {
      expect(tstElements[1].getElement()).toEqual('1:2:3');
    });

    it('should get element[1].isSubElement() as \'True\'', () => {
      expect(tstElements[1].isSubElement()).toBeTrue();
    });

    it('should get element[1].getSegmentId() as \'TST01\'', () => {
      expect(tstElements[1].getSegmentId()).toEqual('TST01');
    });

    it('should get element[1].getDescription() as \'Test sub element 1\'', () => {
      expect(tstElements[1].getDescription()).toEqual('Test sub element 1');
    });

    it('should get element[1].isError() as \'True\'', () => {
      expect(tstElements[1].isError()).toBeTrue();
    });

    it('should get element[1].getError() as \'Test error message 1\'', () => {
      expect(tstElements[1].getError()).toEqual('Test error message 1');
    });

    it('should get element[1]getSubElement(0) as \'1\'', () => {
      expect(tstElements[1].getSubElement(0)).toEqual('1');
    });

    it('should get element[1].getSubElement(1) as \'2\'', () => {
      expect(tstElements[1].getSubElement(1)).toEqual('2');
    });
7
    it('should get element[1] sub element[2] as \'3\'', () => {
      expect(tstElements[1].getSubElement(2)).toEqual('3');
    });

    it('should get element[2].getElement() as \'a:b:c:d\'', () => {
      expect(tstElements[2].getElement()).toEqual('a:b:c:d');
    });

    it('should get element[2].isSubElement() as \'True\'', () => {
      expect(tstElements[2].isSubElement()).toBeTrue();
    });

    it('should get element[2].getSegmentId() as \'TST02\'', () => {
      expect(tstElements[2].getSegmentId()).toEqual('TST02');
    });

    it('should get element[2].getDescription() as \'Test sub element 2\'', () => {
      expect(tstElements[2].getDescription()).toEqual('Test sub element 2');
    });

    it('should get element[2].isError() as \'True\'', () => {
      expect(tstElements[2].isError()).toBeTrue();
    });

    it('should get element[2].getError() as \'Test error message 2\'', () => {
      expect(tstElements[2].getError()).toEqual('Test error message 2');
    });

    it('should get element[2].getSubElement(0) as \'a\'', () => {
      expect(tstElements[2].getSubElement(0)).toEqual('a');
    });

    it('should get element[2].getSubElement(1) as \'b\'', () => {
      expect(tstElements[2].getSubElement(1)).toEqual('b');
    });

    it('should get element[2].getSubElement(2) as \'c\'', () => {
      expect(tstElements[2].getSubElement(2)).toEqual('c');
    });

    it('should get element[2].getSubElement(3) as \'d\'', () => {
      expect(tstElements[2].getSubElement(3)).toEqual('d');
    });
  });
});
