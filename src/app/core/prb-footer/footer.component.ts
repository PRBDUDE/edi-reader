import {Component} from '@angular/core';
import {CopyrightComponent} from "./copyright/copyright.component";

@Component({
  selector: 'prb-footer',
  imports: [
    CopyrightComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
}
