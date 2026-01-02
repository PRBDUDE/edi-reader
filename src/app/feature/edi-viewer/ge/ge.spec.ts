import { ComponentFixture, TestBed } from '@angular/core/testing';

import Ge from './ge';

describe('Ge', () => {
  let component: Ge;
  let fixture: ComponentFixture<Ge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
