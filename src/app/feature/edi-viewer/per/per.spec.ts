import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {Per} from './per';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('Per', () => {
  let component: Per;
  let fixture: ComponentFixture<Per>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Per]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Per);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('PER*IP*JOHN DOE*HP*5741234567*CP*5743442256*EM*PDOE23@DEMO.COM', () => {
    const testData = 'PER*IP*JOHN DOE*HP*5741234567*CP*5743442256*EM*PDOE23@DEMO.COM';

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
      expect(component.segmentDelimiter()).toEqual('~');
    });

    it('should contain element delimiter', () => {
      expect(component.elementDelimiter()).toEqual('*');
    });

    it('should contain sub element delimiter', () => {
      expect(component.subElementDelimiter()).toEqual(':');
    });

    describe('check contents of html tag', () => {
      let compiled: HTMLElement;
      let spans: HTMLCollectionOf<HTMLElement>;

      beforeEach(() => {
        compiled = fixture.nativeElement;
        spans = compiled.getElementsByTagName('span');
      });

      it('should contain class \'prb-x12-segment\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-segment');
      });

      it('should contain span[0] with \'PER\'', () => {
        expect(spans[0].innerHTML).toContain('PER');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'IP\'', () => {
        expect(spans[2].innerHTML).toContain('IP');
      });

      it('should contain span[3] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'JOHN DOE\'', () => {
        expect(spans[4].innerHTML).toContain('JOHN DOE');
      });

      it('should contain span[5] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[5].innerHTML).toContain('*');
        expect(spans[5].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[6] with \'HP\'', () => {
        expect(spans[6].innerHTML).toContain('HP');
      });

      it('should contain span[7] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[7].innerHTML).toContain('*');
        expect(spans[7].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[8] with \'5741234567\'', () => {
        expect(spans[8].innerHTML).toContain('5741234567');
      });

      it('should contain span[9] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[9].innerHTML).toContain('*');
        expect(spans[9].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[10] with \'CP\'', () => {
        expect(spans[10].innerHTML).toContain('CP');
      });

      it('should contain span[11] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[11].innerHTML).toContain('*');
        expect(spans[11].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[12] with \'5743442256\'', () => {
        expect(spans[12].innerHTML).toContain('5743442256');
      });

      it('should contain span[13] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[13].innerHTML).toContain('*');
        expect(spans[13].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[14] with \'EM\'', () => {
        expect(spans[14].innerHTML).toContain('EM');
      });

      it('should contain span[15] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[15].innerHTML).toContain('*');
        expect(spans[15].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span [16] with \'PDOE23@DEMO.COM\'', () => {
        expect(spans[16].innerHTML).toContain('PDOE23@DEMO.COM');
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

      it('should contain \'PER Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        console.log('TAG: ' + tag[0].innerHTML);
        expect(tag[0].innerHTML).toEqual('PER Elements');
      });

      it('should contain value and description for \'PER01\'', () => {
        expect(descriptions[0].textContent).toContain('PER01:');
        expect(descriptions[0].textContent).toContain('IP');
        expect(descriptions[0].textContent).toContain('contact function code');
      });

      it('should contain value and description for \'PER02\'', () => {
        expect(descriptions[1].textContent).toContain('PER02:');
        expect(descriptions[1].textContent).toContain('JOHN DOE');
        expect(descriptions[1].textContent).toContain('name');
      });

      it('should contain value and description for \'PER03\'', () => {
        expect(descriptions[2].textContent).toContain('PER03:');
        expect(descriptions[2].textContent).toContain('HP');
        expect(descriptions[2].textContent).toContain('home phone');
      });

      it('should contain value and description for \'PER04\'', () => {
        expect(descriptions[3].textContent).toContain('PER04:');
        expect(descriptions[3].textContent).toContain('(574) 123-4567');
        expect(descriptions[3].textContent).toContain('home phone');
      });

      it('should contain value and description for \'PER05\'', () => {
        expect(descriptions[4].textContent).toContain('PER05:');
        expect(descriptions[4].textContent).toContain('CP');
        expect(descriptions[4].textContent).toContain('cell phone');
      });

      it('should contain value and description for \'PER06\'', () => {
        expect(descriptions[5].textContent).toContain('PER06:');
        expect(descriptions[5].textContent).toContain('(574) 344-2256');
        expect(descriptions[5].textContent).toContain('cell phone');
      });

      it('should contain value and description for \'PER07\'', () => {
        expect(descriptions[6].textContent).toContain('PER07:');
        expect(descriptions[6].textContent).toContain('EM');
        expect(descriptions[6].textContent).toContain('electronic mail');
      });

      it('should contain value and description for \'PER08\'', () => {
        expect(descriptions[7].textContent).toContain('PER08:');
        expect(descriptions[7].textContent).toContain('EM');
        expect(descriptions[7].textContent).toContain('PDOE23@DEMO.COM');
      })
    })
  });
});
