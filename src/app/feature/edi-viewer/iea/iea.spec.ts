import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Iea} from './iea';

describe('Iea', () => {
  let component: Iea;
  let fixture: ComponentFixture<Iea>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Iea]
    }).compileComponents();

    fixture = TestBed.createComponent(Iea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
