import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDescription } from './element-description';

describe('ElementDescription', () => {
  let component: ElementDescription;
  let fixture: ComponentFixture<ElementDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
