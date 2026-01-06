import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {Ge} from './ge';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('Ge', () => {
  let component: Ge;
  let fixture: ComponentFixture<Ge>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Ge]
    }).compileComponents();

    fixture = TestBed.createComponent(Ge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('GE*2*1~', () => {
    const testData = 'GE*2*1~';

    beforeEach(() => {
      fixture.componentRef.setInput('geData', testData);
      fixture.componentRef.setInput('geSegmentDelimiter', '~');
      fixture.componentRef.setInput('geElementDelimiter', '*');
      fixture.componentRef.setInput('geSubElementDelimiter', ':');
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
    });

    it('should contain data', () => {
      expect(component.geData()).toEqual(testData);
    });

    it('should contain segment delimiter', () => {
      expect(component.geSegmentDelimiter()).toEqual('~');
    });

    it('should contain element delimiter', () => {
      expect(component.geElementDelimiter()).toEqual('*');
    });

    it('should contain sub element delimiter', () => {
      expect(component.geSubElementDelimiter()).toEqual(':');
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

      it('should contain span[0] with \'GE\'', () => {
        expect(spans[0].innerHTML).toContain('GE');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'2\'', () => {
        expect(spans[2].innerHTML).toContain('2');
      });

      it('should contain span[3] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'1\'', () => {
        expect(spans[4].innerHTML).toContain('1');
      });
    })

    describe('check contents of html tag on hover', () => {
      let compiled: HTMLElement;
      let spans: HTMLCollectionOf<HTMLElement>;
      let debugElement: DebugElement;
      let descriptions: NodeListOf<HTMLElement>;

      beforeEach(fakeAsync(() => {
        debugElement = fixture.debugElement.query(By.css('.prb-info'));
        debugElement.triggerEventHandler('mouseenter', null);
        tick();
        fixture.detectChanges();
        compiled = fixture.nativeElement as HTMLElement;
        spans = compiled.getElementsByTagName('span') as unknown as HTMLCollectionOf<HTMLElement>;
        descriptions = compiled.querySelectorAll('prb-element-description');
        console.log(compiled.innerHTML);
      }));

      it('should contain \'GE Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        console.log('TAG: ' + tag[0].innerHTML);
        expect(tag[0].innerHTML).toEqual('GE Elements');
      });

      it('should contain value and description for \'GE01\'', () => {
        expect(descriptions[0].textContent).toContain('GE01:');
        expect(descriptions[0].textContent).toContain('2');
        expect(descriptions[0].textContent).toContain('number of transaction sets');
      });

      it('should contain value and description for \'GE02\'', () => {
        expect(descriptions[1].textContent).toContain('GE02:');
        expect(descriptions[1].textContent).toContain('1');
        expect(descriptions[1].textContent).toContain('control group number');
      });
    })
  });
});
