import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiViewer } from './edi-viewer';

describe('EdiViewer', () => {
  let component: EdiViewer;
  let fixture: ComponentFixture<EdiViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdiViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
