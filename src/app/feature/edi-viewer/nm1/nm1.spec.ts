import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Nm1} from './nm1';

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
});
