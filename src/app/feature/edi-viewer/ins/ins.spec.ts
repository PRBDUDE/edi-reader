import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ins } from './ins';

describe('Ins', () => {
  let component: Ins;
  let fixture: ComponentFixture<Ins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ins]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
