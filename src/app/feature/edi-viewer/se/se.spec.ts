import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Se } from './se';

describe('Se', () => {
  let component: Se;
  let fixture: ComponentFixture<Se>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Se]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Se);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
