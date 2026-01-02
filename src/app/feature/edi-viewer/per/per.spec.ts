import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Per } from './per';

describe('Per', () => {
  let component: Per;
  let fixture: ComponentFixture<Per>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Per]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Per);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
