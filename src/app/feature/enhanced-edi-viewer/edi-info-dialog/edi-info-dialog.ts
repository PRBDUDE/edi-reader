import {Component, input} from '@angular/core';
import {EdiBuilder} from '@edi/builders/edi-builder';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'prb-edi-info-dialog',
  imports: [
    DecimalPipe
  ],
  templateUrl: './edi-info-dialog.html',
  styleUrl: './edi-info-dialog.scss',
})
export class EdiInfoDialog {
  segment = input<EdiBuilder>();
}
