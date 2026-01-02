import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N4 } from './n4';

describe('N4', () => {
  let component: N4;
  let fixture: ComponentFixture<N4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
