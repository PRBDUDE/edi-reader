import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {N4} from './n4';

describe('N4', () => {
  let component: N4;
  let fixture: ComponentFixture<N4>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [N4]
    }).compileComponents();

    fixture = TestBed.createComponent(N4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
