import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-hd',
  imports: [],
  templateUrl: './hd.html',
  styleUrls: ['./hd.scss', '../edi-viewer.scss']
})
export class Hd implements OnInit {
  hdData = input<string>('GS*BE*87790056*576687090*20251107*1430*1*X*005010X220A1~');
  hdElementDelimiter = input<string>('*');
  hdSubElementDelimiter = input<string>(':');
  hdSegmentDelimiter = input<string>('~');
  hdValid = false;
  hd: string[] | undefined;

  ngOnInit() {
    const hdSegmentLength = this.hdData().length;
    this.hd = this.hdData().substring(0, hdSegmentLength).split(this.hdElementDelimiter());
    this.hdValid = true;
  }

  getHdElementDelimiter() {
    return this.hdElementDelimiter();
  }

  getHdLength() {
    if (!this.hd) return 0;
    return this.hd.length;
  }
}
