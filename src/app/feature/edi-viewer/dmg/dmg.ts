import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-dmg',
  imports: [],
  templateUrl: './dmg.html',
  styleUrls: ['./dmg.scss', '../edi-viewer.scss']
})
export class Dmg implements OnInit {
  data = input<string>('DMG*D8*19860115*M~');
  elementDelimiter = input<string>('*');
  subElementDelimiter = input<string>(':');
  segmentDelimiter = input<string>('~');
  valid = false;
  dmg: string[] | undefined;

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
