import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EnhancedEdiViewer} from './enhanced-edi-viewer';

describe('EnhancedEdiViewer', () => {
  let component: EnhancedEdiViewer;
  let fixture: ComponentFixture<EnhancedEdiViewer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EnhancedEdiViewer]
    }).compileComponents();

    fixture = TestBed.createComponent(EnhancedEdiViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
