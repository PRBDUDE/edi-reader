import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hd } from './hd';

describe('Hd', () => {
  let component: Hd;
  let fixture: ComponentFixture<Hd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
