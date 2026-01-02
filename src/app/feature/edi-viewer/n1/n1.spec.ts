import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1 } from './n1';

describe('N1', () => {
  let component: N1;
  let fixture: ComponentFixture<N1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
