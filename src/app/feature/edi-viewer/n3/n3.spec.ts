import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {N3} from './n3';

describe('N3', () => {
  let component: N3;
  let fixture: ComponentFixture<N3>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [N3]
    }).compileComponents();

    fixture = TestBed.createComponent(N3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
