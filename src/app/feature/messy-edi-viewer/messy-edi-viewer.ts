import {Component} from '@angular/core';
import {Isa} from './isa/isa';
import {Gs} from './gs/gs';
import {Iea} from './iea/iea';
import {Ge} from './ge/ge';
import {St} from './st/st';
import {Se} from './se/se';
import {Bgn} from './bgn/bgn';
import {Ref} from './ref/ref';
import {Dtp} from './dtp/dtp';
import {N1} from './n1/n1';
import {N3} from './n3/n3';
import {N4} from './n4/n4';
import {Ins} from './ins/ins';
import {Nm1} from './nm1/nm1';
import {Per} from './per/per';
import {Dmg} from './dmg/dmg';
import {Hd} from './hd/hd';

@Component({
  selector: 'prb-edi-viewer',
  imports: [
    Isa,
    Gs,
    Iea,
    Ge,
    St,
    Se,
    Bgn,
    Ref,
    Dtp,
    N1,
    N3,
    N4,
    Ins,
    Nm1,
    Per,
    Dmg,
    Hd
  ],
  templateUrl: './messy-edi-viewer.html',
  styleUrl: './messy-edi-viewer.scss',
})
export class MessyEdiViewer {
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
  elementDelimiter = this.ediData.charAt(101);
  subElementDelimiter = this.ediData.charAt(102);
  segmentDelimiter = this.ediData.charAt(103);
  segments = this.ediData.split(this.segmentDelimiter);
}
