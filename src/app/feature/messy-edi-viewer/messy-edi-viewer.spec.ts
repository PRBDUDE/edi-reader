import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {MessyEdiViewer} from './messy-edi-viewer';

describe('MessyEdiViewer', () => {
  let component: MessyEdiViewer;
  let fixture: ComponentFixture<MessyEdiViewer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MessyEdiViewer]
    }).compileComponents();

    fixture = TestBed.createComponent(MessyEdiViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
