import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iea } from './iea';

describe('Iea', () => {
  let component: Iea;
  let fixture: ComponentFixture<Iea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
