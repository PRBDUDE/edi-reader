import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Ref} from './ref';

describe('Ref', () => {
  let component: Ref;
  let fixture: ComponentFixture<Ref>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Ref]
    }).compileComponents();

    fixture = TestBed.createComponent(Ref);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
