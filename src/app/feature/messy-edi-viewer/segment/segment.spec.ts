import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Segment} from './segment';

describe('Segment', () => {
  let component: Segment;
  let fixture: ComponentFixture<Segment>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Segment]
    }).compileComponents();

    fixture = TestBed.createComponent(Segment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
