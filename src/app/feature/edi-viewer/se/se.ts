import {Component, input, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';

@Component({
  selector: 'prb-se',
  imports: [
    ElementDescription
  ],
  templateUrl: './se.html',
  styleUrls: ['./se.scss', '../edi-viewer.scss']
})
export class Se implements OnInit {
  seData = input<string>('SE*18*0001~');
  seElementDelimiter = input<string>('*');
  seSubElementDelimiter = input<string>(':');
  seSegmentDelimiter = input<string>('~');
  seValid = false;
  se: string[] | undefined;

  ngOnInit() {
    const seSegmentLength = this.seData().length;
    this.se = this.seData().substring(0, seSegmentLength).split(this.seElementDelimiter());
    this.seValid = true;
  }

  getSeElementDelimiter() {
    return this.seElementDelimiter();
  }

  getSeLength() {
    if (!this.se) return 0;
    return this.se.length;
  }

  getSeElement(index: number) {
    return this.se![index];
  }
}
