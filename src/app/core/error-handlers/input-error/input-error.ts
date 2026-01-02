import {Component, input} from '@angular/core';
import {BaseFilterType} from "@filters/base-filter-type";

@Component({
  selector: 'prb-input-error',
  imports: [],
  templateUrl: './input-error.html',
  styleUrl: './input-error.scss'
})
export class InputError {
  /**
   * Title of the box.
   */
  title = input<string>();
  /**
   * Filter type to display error message for.
   */
  filterType = input<BaseFilterType>();
}
