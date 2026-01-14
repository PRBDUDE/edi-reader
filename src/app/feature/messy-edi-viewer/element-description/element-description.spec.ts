import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ElementDescription} from './element-description';

describe('ElementDescription', () => {
  let component: ElementDescription;
  let fixture: ComponentFixture<ElementDescription>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ElementDescription]
    }).compileComponents();

    fixture = TestBed.createComponent(ElementDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('check descriptions', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('element', 'TEST01');
      fixture.componentRef.setInput('data', 'DATA01');
      fixture.componentRef.setInput('description', 'description of test data');
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
    });

    it('should contain element \'TEST01\'', () => {
      expect(component.element()).toEqual('TEST01');
    });

    it('should contain data \'DATA01\'', () => {
      expect(component.data()).toEqual('DATA01');
    });

    it('should contain description \'description of test data\'', () => {
      expect(component.description()).toEqual('description of test data');
    });

    describe('check contents of html tag', () => {
      let compiled: HTMLElement;
      let divElement: HTMLElement;
      let spans: HTMLCollectionOf<HTMLElement>;

      beforeEach(() => {
        compiled = fixture.nativeElement;
        divElement = compiled.getElementsByTagName('div')[0];
        spans = compiled.getElementsByTagName('span');
      });

      it('should contain element \'TEST01\'', () => {
        expect(divElement.textContent).toContain('TEST01');
      });

      it('should contain data \'DATA01\'', () => {
        expect(spans[0].textContent).toContain('DATA01');
      });

      it('should contain description \'description of test data\'', () => {
        expect(spans[1].textContent).toContain('description of test data');
      });
    })
  });
});
