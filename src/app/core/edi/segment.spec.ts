import {Delimiters} from './delimiters';
import {Segment} from './segment';

describe('Segment', () => {
  let delimiters: Delimiters;
  let segment: Segment;
  const isa = 'ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:~';

  beforeEach(() => {
    delimiters = new Delimiters(isa);
  });

  describe('check ISA segment', () => {
    beforeEach(() => {
      segment = new Segment(isa, delimiters);
    });

    it('should create instance', () => {
      expect(segment).toBeTruthy();
    });

    describe('getDelimiters', () => {
      it('should contain segment delimiter \'~\'', () => {
        expect(segment.getDelimiters()?.getSegmentDelimiter()).toEqual('~');
      });

      it('should contain element delimiter \'*\'', () => {
        expect(segment.getDelimiters()?.getElementDelimiter()).toEqual('*');
      });

      it('should contain sub element delimiter \':\'', () => {
        expect(segment.getDelimiters()?.getSubElementDelimiter()).toEqual(':');
      });
    })

    describe('check loop', () => {
      it('should contain loop \'1000\'', () => {
        segment.setCssClass('1000');
        expect(segment.getCssClass()).toEqual('1000');
      });

      it('should contain \'ISA\'', () => {
        segment.setCssClass('1100');
        expect(segment.getCssClass()).toEqual('1100');
      });
    });

    describe('check error', () => {
      it('should not contain error', () => {
        expect(segment.getError(2)).toBeUndefined();
        expect(segment.getError(3)).toBeUndefined();
        expect(segment.getError(5)).toBeUndefined();
        expect(segment.isError()).toBeFalse();
      })

      it('should contain error in element 2', () => {
        segment.setError(2, 'Test error message 2');
        expect(segment.getError(2)).toEqual('Test error message 2');
        expect(segment.isError()).toBeTrue();
      });

      it('should contain error in element 3', () => {
        segment.setError(3, 'Test error message 3');
        expect(segment.getError(3)).toEqual('Test error message 3');
        expect(segment.isError()).toBeTrue();
      });

      it('should contain error in element 5', () => {
        segment.setError(5, 'Test error message 5');
        expect(segment.getError(5)).toEqual('Test error message 5');
        expect(segment.isError()).toBeTrue();
      });
    })

    describe('getElement', () => {
      it('should contain \'ISA\' in element 0', () => {
        expect(segment.getElement(0)).toEqual('ISA');
      });

      it('should contain \'00\' in element 1', () => {
        expect(segment.getElement(1)).toEqual('00');
      });

      it('should contain \'          \' in element 2', () => {
        expect(segment.getElement(2)).toEqual('          ');
      });
    });
  });

  describe('check sub element in segment', () => {
    const tst = 'TST*1:2:3:4*a:b:c:d*e:f:g:h~';

    beforeEach(() => {
      segment = new Segment(tst, delimiters);
    });

    it('should contain sub element \'0\' of element 1', () => {
      expect(segment.getSubElement(1,0)).toEqual('1');
    });

    it('should contain sub element \'2\' of element 1', () => {
      expect(segment.getSubElement(1,2)).toEqual('3');
    });

    it('should contain sub element \'3\' of element 1', () => {
      expect(segment.getSubElement(1,3)).toEqual('4');
    });

    it('should contain sub element \'2\' of element 2', () => {
      expect(segment.getSubElement(2,2)).toEqual('c');
    });

    it('should contain sub element \'3\' of element 2', () => {
      expect(segment.getSubElement(2,3)).toEqual('d');
    })
  })
})
