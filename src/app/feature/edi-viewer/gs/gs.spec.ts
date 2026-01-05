import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Gs} from './gs';

describe('Gs', () => {
  let component: Gs;
  let fixture: ComponentFixture<Gs>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Gs]
    }).compileComponents();

    fixture = TestBed.createComponent(Gs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
