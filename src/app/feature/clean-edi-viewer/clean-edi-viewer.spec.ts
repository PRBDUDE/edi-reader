import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CleanEdiViewer} from './clean-edi-viewer';

describe('CleanEdiViewer', () => {
  let component: CleanEdiViewer;
  let fixture: ComponentFixture<CleanEdiViewer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CleanEdiViewer]
    }).compileComponents();

    fixture = TestBed.createComponent(CleanEdiViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
