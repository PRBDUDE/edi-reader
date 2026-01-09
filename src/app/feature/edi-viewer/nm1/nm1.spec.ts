import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {Nm1} from './nm1';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('Nm1', () => {
  let component: Nm1;
  let fixture: ComponentFixture<Nm1>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Nm1]
    }).compileComponents();

    fixture = TestBed.createComponent(Nm1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('NM1*IL*1*DOE*JOHN****34*123456789', () => {
    const testData = 'NM1*IL*1*DOE*JOHN****34*123456789';

    beforeEach(() => {
      fixture.componentRef.setInput('data', testData);
      fixture.componentRef.setInput('segmentDelimiter', '~');
      fixture.componentRef.setInput('elementDelimiter', '*');
      fixture.componentRef.setInput('subElementDelimiter', ':');
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
    });

    it('should contain data', () => {
      expect(component.data()).toContain(testData);
    });

    it('should contain segment delimiter', () => {
      expect(component.segmentDelimiter()).toContain('~');
    });

    it('should contain element delimiter', () => {
      expect(component.elementDelimiter()).toContain('*');
    });

    it('should contain sub element delimiter', () => {
      expect(component.subElementDelimiter()).toContain(':');
    });

    describe('check contents of html tag', () => {
      let compiled: HTMLElement;
      let spans: HTMLCollectionOf<Element>;

      beforeEach(() => {
        compiled = fixture.nativeElement;
        spans = compiled.getElementsByTagName('span');
      });

      it('should contain class \'prb-x12-segment\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-segment');
      });

      it('should contain span[0] with \'NM1\'', () => {
        expect(spans[0].innerHTML).toContain('NM1');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'IL\'', () => {
        expect(spans[2].innerHTML).toContain('IL');
      });

      it('should contain span[3] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'1\'', () => {
        expect(spans[4].innerHTML).toContain('1');
      });

      it('should contain span[5] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[5].innerHTML).toContain('*');
        expect(spans[5].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[6] with \'DOE\'', () => {
        expect(spans[6].innerHTML).toContain('DOE');
      });

      it('should contain span[7] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[7].innerHTML).toContain('*');
        expect(spans[7].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[8] with \'JOHN\'', () => {
        expect(spans[8].innerHTML).toContain('JOHN');
      });

      it('should contain span[9] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[9].innerHTML).toContain('*');
        expect(spans[9].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[10] with \'\'', () => {
        expect(spans[10].innerHTML.length).toEqual(0);
      });

      it('should contain span[11] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[11].innerHTML).toContain('*');
        expect(spans[11].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[12] with \'\'', () => {
        expect(spans[12].innerHTML.length).toEqual(0);
      });

      it('should contain span[13] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[13].innerHTML).toContain('*');
        expect(spans[13].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[14] with \'\'', () => {
        expect(spans[14].innerHTML.length).toEqual(0);
      });

      it('should contain span[15] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[15].innerHTML).toContain('*');
        expect(spans[15].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[16] with \'34\'', () => {
        expect(spans[16].innerHTML).toContain('34');
      });

      it('should contain span[17] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[17].innerHTML).toContain('*');
        expect(spans[17].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[18] with \'123456789\'', () => {
        expect(spans[18].innerHTML).toContain('123456789');
      });
    });

    describe('check contents of html tag on hover', () => {
      let compiled: HTMLElement;
      let debugElement: DebugElement;
      let descriptions: NodeListOf<HTMLElement>;

      beforeEach(fakeAsync(() => {
        debugElement = fixture.debugElement.query(By.css('.prb-info'));
        debugElement.triggerEventHandler('mouseenter', {});
        tick();
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        descriptions = compiled.querySelectorAll('prb-element-description');
        console.log(compiled.innerHTML);
      }));

      it('should contain \'NM1 Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        console.log('TAG: ' + tag[0].innerHTML);
        expect(tag[0].innerHTML).toEqual('NM1 Elements');
      });

      it('should contain value and description for \'NM101\'', () => {
        expect(descriptions[0].textContent).toContain('NM101:');
        expect(descriptions[0].textContent).toContain('IL');
        expect(descriptions[0].textContent).toContain('relationship code');
      });

      it('should contain value and description for \'NM102\'', () => {
        expect(descriptions[1].textContent).toContain('NM102:');
        expect(descriptions[1].textContent).toContain('1');
        expect(descriptions[1].textContent).toContain('entity identifier code');
      });

      it('should contain value and description for \'NM103\'', () => {
        expect(descriptions[2].textContent).toContain('NM103:');
        expect(descriptions[2].textContent).toContain('DOE');
        expect(descriptions[2].textContent).toContain('last name');
      });

      it('should contain value and description for \'NM104\'', () => {
        expect(descriptions[3].textContent).toContain('NM104:');
        expect(descriptions[3].textContent).toContain('JOHN');
        expect(descriptions[3].textContent).toContain('first name');
      });

      it('should NOT contain value and description for \'NM105\'', () => {
        expect(descriptions[4].textContent).toBeFalsy();
        expect(descriptions[4].textContent).toBeFalsy();
        expect(descriptions[4].textContent).toBeFalsy();
      });

      it('should NOT contain value and description for \'NM106\'', () => {
        expect(descriptions[5].textContent).toBeFalsy();
        expect(descriptions[5].textContent).toBeFalsy();
        expect(descriptions[5].textContent).toBeFalsy();
      });

      it('should NOT contain value and description for \'NM107\'', () => {
        expect(descriptions[6].textContent).toBeFalsy();
        expect(descriptions[6].textContent).toBeFalsy();
        expect(descriptions[6].textContent).toBeFalsy();
      });

      it('should contain value and description for \'NM108\'', () => {
        expect(descriptions[7].textContent).toContain('NM108:');
        expect(descriptions[7].textContent).toContain('34');
        expect(descriptions[7].textContent).toContain('identification code qualifier');
      });

      it('should contain value and description for \'NM109\'', () => {
        expect(descriptions[8].textContent).toContain('NM109:');
        expect(descriptions[8].textContent).toContain('123456789');
        expect(descriptions[8].textContent).toContain('identification code');
      });
    })
  });
});
