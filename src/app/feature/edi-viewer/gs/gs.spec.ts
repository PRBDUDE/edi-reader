import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gs } from './gs';

describe('Gs', () => {
  let component: Gs;
  let fixture: ComponentFixture<Gs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
