import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Dmg} from './dmg';

describe('Dmg', () => {
  let component: Dmg;
  let fixture: ComponentFixture<Dmg>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Dmg]
    }).compileComponents();

    fixture = TestBed.createComponent(Dmg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('DMG*D8*19850507*F~', () => {
    const testData = 'DMG*D8*19850507*F~'

    beforeEach(() => {
      fixture.componentRef.setInput('dmgData', testData);
      fixture.componentRef.setInput('dmgSegmentDelimiter', '~');
      fixture.componentRef.setInput('dmgElementDelimiter', '*');
      fixture.componentRef.setInput('dmgSubElementDelimiter', ':');
      fixture.detectChanges();
      console.log('DATA: ' + fixture.componentRef.instance.dmgData());
    });

    it('should contain data', () => {
      expect(component.dmgData()).toEqual(testData);
    });

    it('should contain segment delimiter', () => {
      expect(component.dmgSegmentDelimiter()).toEqual('~');
    });

    it('should contain element delimiter', () => {
      expect(component.dmgElementDelimiter()).toEqual('*');
    });

    it('should contain sub element delimiter', () => {
      expect(component.dmgSubElementDelimiter()).toEqual(':');
    });

    describe('check contents of html tag', () => {
      let compiled: HTMLElement;
      let spans: HTMLCollectionOf<HTMLElement>;

      beforeEach(() => {
        compiled = fixture.nativeElement as HTMLElement;
        spans = compiled.getElementsByTagName('span') as unknown as HTMLCollectionOf<HTMLElement>;
      });

      it('should contain class \'prb-x12-segment\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-segment');
      });

      it('should contain span[0] with \'DMG\'', () => {
        expect(spans[0].innerHTML).toContain('DMG');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'D8\'', () => {
        expect(spans[2].innerHTML).toContain('D8');
      });

      it('should contain span[3] with \'*\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'19850507\'', () => {
        expect(spans[4].innerHTML).toContain('19850507');
      });

      it('should contain span[5] with \'*\'', () => {
        expect(spans[5].innerHTML).toContain('*');
        expect(spans[5].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[6] with \'F\'', () => {
        expect(spans[6].innerHTML).toContain('F');
      });
    });
  })
});
