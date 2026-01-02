import {Component, input} from '@angular/core';
import {Attribute} from "./model/attribute";
import {Indentation} from "@utility/indentation";

@Component({
  selector: 'prb-html-tag',
  imports: [],
  templateUrl: './html-tag.html',
  styleUrl: './html-tag.scss'
})
export class HtmlTag {
  level = input<number>(0);
  tag = input<string>('');
  attributes = input<Attribute[]>([]);
  content = input<string>('');

  getIndentation(extra = 0) {
    return Indentation.get(this.level(), extra);
  }

  hasContent() {
    return this.content() !== '';
  }
}
