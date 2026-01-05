import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Dtp} from './dtp';

describe('Dtp', () => {
  let component: Dtp;
  let fixture: ComponentFixture<Dtp>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Dtp]
    }).compileComponents();

    fixture = TestBed.createComponent(Dtp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
