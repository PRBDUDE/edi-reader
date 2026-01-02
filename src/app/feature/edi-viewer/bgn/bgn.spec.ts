import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bgn } from './bgn';

describe('Bgn', () => {
  let component: Bgn;
  let fixture: ComponentFixture<Bgn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bgn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bgn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
