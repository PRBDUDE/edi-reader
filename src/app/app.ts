import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RoadblockHeader} from '@header/roadblock-header';
import {PrimeNG} from 'primeng/config';
// import {ProfileService} from '@services/profile.service';
// import {setPrimaryColor} from '@utility/set-primary-color';
// import {setSurfaceColor} from '@utility/set-surface-color';
// import {setDarkTheme, setDebugMode, setFixedFooter} from '@utility/prb-mode';

@Component({
  selector: 'prb-root',
  imports: [
    RouterOutlet,
    // RoadblockHeader
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('edi-reader');
  // private profileService = inject(ProfileService);
  primeng = inject(PrimeNG);

  ngOnInit() {
    // this.profileService.getProfile().subscribe(profile => {
    //   setPrimaryColor(profile.primary);
    //   setSurfaceColor(profile.surface);
    //   this.primeng.ripple.set(profile.ripple);
    //   setFixedFooter(profile.fixedFooter);
    //   setDarkTheme(profile.darkTheme);
    //   setDebugMode(profile.debug);
    // })
    this.primeng.zIndex = {
      modal: 10000,
      overlay: 10000,
      menu: 10000,
      tooltip: 10000
    }
    this.primeng.filterMatchModeOptions = {
      text: ['contains', 'notcontains', 'equals', 'notequals', 'in', 'notin'],
      numeric: ['equals', 'notequals', 'lt', 'lte', 'gt', 'gte', 'in', 'notin'],
      date: ['equals', 'notequals', 'before', 'after', 'between', 'notbetween']
    };
  }
}
