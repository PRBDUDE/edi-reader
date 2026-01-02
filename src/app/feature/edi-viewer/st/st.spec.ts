import { ComponentFixture, TestBed } from '@angular/core/testing';

import { St } from './st';

describe('St', () => {
  let component: St;
  let fixture: ComponentFixture<St>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [St]
    })
    .compileComponents();

    fixture = TestBed.createComponent(St);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
