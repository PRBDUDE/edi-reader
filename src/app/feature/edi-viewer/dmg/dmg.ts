import {Component, input, OnChanges, OnInit} from '@angular/core';
import {ElementDescription} from '../element-description/element-description';
import {D8DatePipe} from '../../../core/pipes/d8-date-pipe';

@Component({
  selector: 'prb-dmg',
  imports: [
    ElementDescription,
    D8DatePipe
  ],
  templateUrl: './dmg.html',
  styleUrls: ['./dmg.scss', '../edi-viewer.scss']
})
export class Dmg implements OnInit, OnChanges {
  dmgData = input<string>('DMG*D8*19860115*M~');
  dmgElementDelimiter = input<string>('*');
  dmgSubElementDelimiter = input<string>(':');
  dmgSegmentDelimiter = input<string>('~');
  dmgValid = false;
  dmg: string[] | undefined;

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    if (this.dmgData()) {
      this.init();
    }
  }

  private init() {
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

  getDmgElement(index: number) {
    return this.dmg![index];
  }
}
