import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'prb-dmg',
  imports: [],
  templateUrl: './dmg.html',
  styleUrls: ['./dmg.scss', '../edi-viewer.scss']
})
export class Dmg implements OnInit {
  dmgData = input<string>('DMG*D8*19860115*M~');
  dmgElementDelimiter = input<string>('*');
  dmgSubElementDelimiter = input<string>(':');
  dmgSegmentDelimiter = input<string>('~');
  dmgValid = false;
  dmg: string[] | undefined;

  ngOnInit() {
    const dmgSegmentLength = this.dmgData().length;
    this.dmg = this.dmgData().substring(0, dmgSegmentLength).split(this.dmgElementDelimiter());
    this.dmgValid = true;
  }

  getDmgElementDelimiter() {
    return this.dmgElementDelimiter();
  }

  getDmgLength() {
    if (!this.dmg) return 0;
    return this.dmg.length;
  }
}
