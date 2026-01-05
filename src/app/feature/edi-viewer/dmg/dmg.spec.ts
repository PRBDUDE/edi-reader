import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Dmg} from './dmg';

describe('Dmg', () => {
  let component: Dmg;
  let fixture: ComponentFixture<Dmg>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Dmg]
    }).compileComponents();

    fixture = TestBed.createComponent(Dmg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
