import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {St} from './st';

describe('St', () => {
  let component: St;
  let fixture: ComponentFixture<St>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [St]
    }).compileComponents();

    fixture = TestBed.createComponent(St);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ST*834*0001*005010X220A1', () => {
    const testData = 'ST*834*0001*005010X220A1';

    beforeEach(() => {
      fixture.componentRef.setInput('data', testData);
      fixture.componentRef.setInput('segmentDelimiter', '~');
      fixture.componentRef.setInput('elementDelimiter', '*');
      fixture.componentRef.setInput('subElementDelimiter', ':');
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
    });

    it('should render the ST segment', () => {
      expect(component.data()).toContain(testData);
    });

    it('should render the ST segment with the correct segment delimiter', () => {
      expect(component.segmentDelimiter()).toEqual('~');
    });

    it('should render the ST segment with the correct element delimiter', () => {
      expect(component.elementDelimiter()).toEqual('*');
    });

    it('should render the ST segment with the correct sub element delimiter', () => {
      expect(component.subElementDelimiter()).toEqual(':');
    });

    describe('check contents of html tag', () => {
      let compiled: HTMLElement;
      let spans: HTMLCollectionOf<HTMLSpanElement>;

      beforeEach(() => {
        compiled = fixture.nativeElement;
        spans = compiled.getElementsByTagName('span');
      });

      it('should contain class \'prb-x12-st\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-st');
      });

      it('should contain span[0] with \'ST\'', () => {
        expect(spans[0].innerHTML).toContain('ST');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'834\'', () => {
        expect(spans[2].innerHTML).toContain('834');
      });

      it('should contain span[3] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'0001\'', () => {
        expect(spans[4].innerHTML).toContain('0001');
      });

      it('should contain span[5] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[5].innerHTML).toContain('*');
        expect(spans[5].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[6] with \'005010X220A1\'', () => {
        expect(spans[6].innerHTML).toContain('005010X220A1');
      });
    });
  });
});
