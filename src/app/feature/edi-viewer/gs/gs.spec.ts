import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Gs} from './gs';

describe('Gs', () => {
  let component: Gs;
  let fixture: ComponentFixture<Gs>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Gs]
    }).compileComponents();

    fixture = TestBed.createComponent(Gs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('GS*BE*87790056*576687090*20251107*1430*1*X*005010X220A1~', () => {
    const testData = 'GS*BE*87790056*576687090*20251107*1430*1*X*005010X220A1~';

    beforeEach(() => {
      fixture.componentRef.setInput('gsData', testData);
      fixture.componentRef.setInput('gsSegmentDelimiter', '~');
      fixture.componentRef.setInput('gsElementDelimiter', '*');
      fixture.componentRef.setInput('gsSubElementDelimiter', ':');
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
    });

    it('should contain data', () => {
      expect(component.gsData()).toEqual(testData);
    });

    it('should contain segment delimiter', () => {
      expect(component.gsSegmentDelimiter()).toEqual('~');
    });

    it('should contain element delimiter', () => {
      expect(component.gsElementDelimiter()).toEqual('*');
    });

    it('should contain sub element delimiter', () => {
      expect(component.gsSubElementDelimiter()).toEqual(':');
    });

    describe('check contents of html tag', () => {
      let compiled: HTMLElement;
      let spans: HTMLCollectionOf<HTMLElement>;

      beforeEach(() => {
        compiled = fixture.nativeElement as HTMLElement;
        spans = compiled.getElementsByTagName('span') as unknown as HTMLCollectionOf<HTMLElement>;
        console.log(compiled.innerHTML);
      });

      it('should contain class \'prb-x12-group\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-group');
      });

      it('should contain span[0] with \'GS\'', () => {
        expect(spans[0].innerHTML).toContain('GS');
      });

      it('should contain span[1] with \'*\' and class \'prb-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-element-delimiter');
      });

      it('should contain span[2] with \'BE\'', () => {
        expect(spans[2].innerHTML).toContain('BE');
      });

      it('should contain span[3] with \'*\' and class \'prb-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-element-delimiter');
      });

      it('should contain span[4] with \'87790056\'', () => {
        expect(spans[4].innerHTML).toContain('87790056');
      });

      it('should contain span[5] with \'*\' and class \'prb-element-delimiter\'', () => {
        expect(spans[5].innerHTML).toContain('*');
        expect(spans[5].className).toContain('prb-element-delimiter');
      });

      it('should contain span[6] with \'576687090\'', () => {
        expect(spans[6].innerHTML).toContain('576687090');
      });
      it('should contain span[7] with \'*\' and class \'prb-element-delimiter\'', () => {
        expect(spans[7].innerHTML).toContain('*');
        expect(spans[7].className).toContain('prb-element-delimiter');
      });

      it('should contain span[8] with \'20251107\'', () => {
        expect(spans[8].innerHTML).toContain('20251107');
      });

      it('should contain span[9] with \'*\' and class \'prb-element-delimiter\'', () => {
        expect(spans[9].innerHTML).toContain('*');
        expect(spans[9].className).toContain('prb-element-delimiter');
      });

      it('should contain span[10] with \'1430\'', () => {
        expect(spans[10].innerHTML).toContain('1430');
      });

      it('should contain span[11] with \'*\' and class \'prb-element-delimiter\'', () => {
        expect(spans[11].innerHTML).toContain('*');
        expect(spans[11].className).toContain('prb-element-delimiter');
      });

      it('should contain span[12] with \'1\'', () => {
        expect(spans[12].innerHTML).toContain('1');
      });

      it('should contain span[13] with \'*\' and class \'prb-element-delimiter\'', () => {
        expect(spans[13].innerHTML).toContain('*');
        expect(spans[13].className).toContain('prb-element-delimiter');
      });

      it('should contain span[14] with \'X\'', () => {
        expect(spans[14].innerHTML).toContain('X');
      });

      it('should contain span[15] with \'*\' and class \'prb-element-delimiter\'', () => {
        expect(spans[15].innerHTML).toContain('*');
        expect(spans[15].className).toContain('prb-element-delimiter');
      });

      it('should contain span[16] with \'005010X220A1\'', () => {
        expect(spans[16].innerHTML).toContain('005010X220A1');
      });
    });
  });
});
