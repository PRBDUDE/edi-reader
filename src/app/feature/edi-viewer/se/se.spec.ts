import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Se} from './se';

describe('Se', () => {
  let component: Se;
  let fixture: ComponentFixture<Se>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Se]
    }).compileComponents();

    fixture = TestBed.createComponent(Se);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
