import {Component, input, OnInit, signal} from '@angular/core';

@Component({
  selector: 'prb-dmg',
  imports: [],
  templateUrl: './dmg.html',
  styleUrls: ['./dmg.scss','../edi-viewer.scss']
})
export class Dmg implements OnInit {
  data = input<String>('DMG*D8*19860115*M~');
  valid = false;
  elementDelimiter = signal('*');
  subElementDelimiter = signal(':');
  segmentDelimiter = signal('~');
  dmg: String[] | undefined;

  ngOnInit() {
    const segmentLength = this.data().length;
    this.dmg = this.data().substring(0, segmentLength).split(this.elementDelimiter());
    this.valid = true;
  }

  getElementDelimiter() {
    return this.elementDelimiter();
  }

  getDmgLength() {
    if (!this.dmg) return 0;
    return this.dmg.length;
  }
}
