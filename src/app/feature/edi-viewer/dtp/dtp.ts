import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-dtp',
  imports: [],
  templateUrl: './dtp.html',
  styleUrls: ['./dtp.scss', '../edi-viewer.scss']
})
export class Dtp implements OnInit {
  dtpData = input<string>('DTP*007*D8*20251101~');
  dtpElementDelimiter = input<string>('*');
  dtpSubElementDelimiter = input<string>(':');
  dtpSegmentDelimiter = input<string>('~');
  dtpValid = false;
  dtp: string[] | undefined;

  ngOnInit() {
    const dtpSegmentLength = this.dtpData().length;
    this.dtp = this.dtpData().substring(0, dtpSegmentLength).split(this.dtpElementDelimiter());
    this.dtpValid = true;
  }

  getDtpLength() {
    if (!this.dtp) return 0;
    return this.dtp.length;
  }

  getDtpElementDelimiter() {
    return this.dtpElementDelimiter();
  }
}
