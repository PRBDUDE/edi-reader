import {Component, OnInit} from '@angular/core';
import {EdiBuilder} from '@edi/builders/edi-builder';
import {SegmentBuilder} from '@edi/builders/segment-builder';
import {EdiInfoDialog} from './edi-info-dialog/edi-info-dialog';

@Component({
  selector: 'prb-enhanced-edi-viewer',
  imports: [
    EdiInfoDialog
  ],
  templateUrl: './enhanced-edi-viewer.html',
  styleUrl: './enhanced-edi-viewer.scss',
})
export class EnhancedEdiViewer implements OnInit {
  ediSegments = new Array<EdiBuilder>();
  ediData = 'ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:~' +
    'GS*BE*87790056*576687090*20251107*1430*1*X*005010X220A1~' +
    'ST*834*0001*005010X220A1~' +
    'BGN*00*123456*20251107*1430~' +
    'REF*38*GROUP123~' +
    'DTP*007*D8*20251101~' +
    'N1*P5*ACME EMPLOYER~' +
    'N1*IN*ALPHA HEALTH PLAN~' +

    'INS*Y*18*001**A*B**RT~' +
    'REF*0F*234567891~' +
    'DTP*336*D8*20251101~' +
    'NM1*IL*1*DOE*PAUL****34*234567891~' +
    'PER*IP*JOHN DOE*HP*5741234567*CP*5743442256*EM*PDOE23@DEMO.COM~' +
    'N3*100 MAIN ST~' +
    'N4*ANYTOWN*CA*90210~' +
    'DMG*D8*19550115*M~' +
    'HD*030**HLT*PLAN123~' +
    'DTP*348*D8*20251101~' +
    'REF*1L*SUBPLAN01~' +

    'INS*Y*18*021*XN*A*E**FT~' +
    'REF*0F*123456789~' +
    'DTP*336*D8*20251101~' +
    'NM1*IL*1*DOE*JOHN****34*123456789~' +
    'PER*IP*JOHN DOE*HP*5551234567~' +
    'N3*100 MAIN ST~' +
    'N4*ANYTOWN*CA*90210~' +
    'DMG*D8*19860115*M~' +
    'HD*030**HLT*PLAN123****EMP~' +
    'DTP*348*D8*20251101~' +
    'REF*1L*SUBPLAN01~' +

    'INS*N*01*021*XN*A*E~' +
    'REF*0F*123456789~' +
    'NM1*IL*1*JOE*JANE****34*123456789~' +
    'PER*IP*JANE DOE*HP*5551234567~' +
    'N3*100 MAIN ST~' +
    'N4*ANYTOWN*CA*90210~' +
    'DMG*D8*20210115*F~' +
    'HD*030**HLT*PLAN123~' +
    'DTP*348*D8*20251101~' +
    'REF*1L*SUBPLAN01~' +

    'SE*39*0001~' +
    'GE*1*1~' +
    'IEA*1*000000905~';

  ngOnInit() {
    this.loadEdiData(this.ediData);
  }

  loadEdiData(ediData: string) {
    const segmentBuilder = new SegmentBuilder(ediData);
    const ediSegmentDelimiter = segmentBuilder.getDelimiters().getSegmentDelimiter();
    const segments = ediData.split(ediSegmentDelimiter as string);
    segments.forEach(segment => {
      return this.ediSegments.push(segmentBuilder.buildSegment(segment));
    })
  }
}
