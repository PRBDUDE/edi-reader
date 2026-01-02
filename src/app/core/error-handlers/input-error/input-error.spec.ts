import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {InputError} from './input-error';

describe('InputError', () => {
  let component: InputError;
  let fixture: ComponentFixture<InputError>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        InputError
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
