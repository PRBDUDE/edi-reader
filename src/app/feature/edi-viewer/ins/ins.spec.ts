import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {Ins} from './ins';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('Ins', () => {
  let component: Ins;
  let fixture: ComponentFixture<Ins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ins]
    }).compileComponents();

    fixture = TestBed.createComponent(Ins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('INS*Y*18*001**A*B**RT', () => {
    const testData = 'INS*Y*18*001**A*B**RT';

    beforeEach(() => {
      fixture.componentRef.setInput('data', testData);
      fixture.componentRef.setInput('segmentDelimiter', '~');
      fixture.componentRef.setInput('elementDelimiter', '*');
      fixture.componentRef.setInput('subElementDelimiter', ':');
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
    });

    it('should contain data', () => {
      expect(component.data()).toEqual(testData);
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
        compiled = fixture.nativeElement as HTMLElement;
        spans = compiled.getElementsByTagName('span') as unknown as HTMLCollectionOf<HTMLElement>;
        console.log(compiled.innerHTML);
      });

      it('should contain class \'prb-x12-segment\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-segment');
      });

      it('should contain span[0] with \'INS\'', () => {
        expect(spans[0].innerHTML).toContain('INS');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'Y\'', () => {
        expect(spans[2].innerHTML).toContain('Y');
      });

      it('should contain span[3] with \'*\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'18\'', () => {
        expect(spans[4].innerHTML).toContain('18');
      });

      it('should contain span[5] with \'*\'', () => {
        expect(spans[5].innerHTML).toContain('*');
        expect(spans[5].className).toContain('prb-12-element-delimiter');
      })

      it('should contain span[6] with \'001\'', () => {
        expect(spans[6].innerHTML).toContain('001');
      });

      it('should contain span[7] with \'*\'', () => {
        expect(spans[7].innerHTML).toContain('*');
        expect(spans[7].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[9] with \'*\'', () => {
        expect(spans[9].innerHTML).toContain('*');
        expect(spans[9].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[10] with \'A\'', () => {
        expect(spans[10].innerHTML).toContain('A');
      });

      it('should contain span[11] with \'*\'', () => {
        expect(spans[11].innerHTML).toContain('*');
        expect(spans[11].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[12] with \'B\'', () => {
        expect(spans[12].innerHTML).toContain('B');
      });

      it('should contain span[13] with \'*\'', () => {
        expect(spans[13].innerHTML).toContain('*');
        expect(spans[13].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[16] with \'RT\'', () => {
        expect(spans[16].innerHTML).toContain('RT');
      })
    });

    describe('check contents of html tag on hover', () => {
      let compiled: HTMLElement;
      let debugElement: DebugElement;
      let descriptions: NodeListOf<HTMLElement>;

      beforeEach(fakeAsync(() => {
        debugElement = fixture.debugElement.query(By.css('.prb-info'));
        debugElement.triggerEventHandler('mouseenter', null);
        tick();
        fixture.detectChanges();
        compiled = fixture.nativeElement as HTMLElement;
        descriptions = compiled.querySelectorAll('prb-element-description');
      }));

      it('should contain \'INS Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        console.log('TAG: ' + tag[0].innerHTML);
        expect(tag[0].innerHTML).toEqual('INS Elements');
      });

      it('should contain value and description for \'INS01\'', () => {
        expect(descriptions[0].textContent).toContain('INS01:');
        expect(descriptions[0].textContent).toContain('Y');
        expect(descriptions[0].textContent).toContain('subscriber');
      });

      it('should contain value and description for \'INS02\'', () => {
        expect(descriptions[1].textContent).toContain('INS02:');
        expect(descriptions[1].textContent).toContain('18');
        expect(descriptions[1].textContent).toContain('self');
      });

      it('should contain value and description for \'INS03\'', () => {
        expect(descriptions[2].textContent).toContain('INS03:');
        expect(descriptions[2].textContent).toContain('001');
        expect(descriptions[2].textContent).toContain('change');
      });

      it('should contain value and description for \'INS05\'', () => {
        expect(descriptions[4].textContent).toContain('INS05:');
        expect(descriptions[4].textContent).toContain('A');
        expect(descriptions[4].textContent).toContain('active');
      });

      it('should contain value and description for \'INS06\'', () => {
        expect(descriptions[5].textContent).toContain('INS06:');
        expect(descriptions[5].textContent).toContain('B');
        expect(descriptions[5].textContent).toContain('medicare B');
      });

      it('should contain value and description for \'INS08\'', () => {
        expect(descriptions[7].textContent).toContain('INS08:');
        expect(descriptions[7].textContent).toContain('RT');
        expect(descriptions[7].textContent).toContain('retired');
      })
    })
  })
});
