import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'prb-per',
  imports: [],
  templateUrl: './per.html',
  styleUrls: ['./per.scss','../edi-viewer.scss']
})
export class Per implements OnInit {
  data = input<String>('PER*IP*JOHN DOE*HP*5551234567~');
  valid = false;
  elementDelimiter = signal('*');
  subElementDelimiter = signal(':');
  segmentDelimiter = signal('~');
  per: String[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.per = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getPerLength() {
    if (!this.per) return 0;
    return this.per.length;
  }
}
