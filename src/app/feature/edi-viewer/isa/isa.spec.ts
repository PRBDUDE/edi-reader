import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Isa} from './isa';

describe('Isa', () => {
  let component: Isa;
  let fixture: ComponentFixture<Isa>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Isa]
    }).compileComponents();

    fixture = TestBed.createComponent(Isa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
