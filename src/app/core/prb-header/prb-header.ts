import {Component, inject, OnInit} from '@angular/core';
import {MegaMenuModule} from "primeng/megamenu";
import {Button} from "primeng/button";
import {Tooltip} from "primeng/tooltip";
import {isProduction} from "@utility/is-production";
import {NgOptimizedImage} from "@angular/common";
import {ColorPalettePicker} from "./color-palette-picker/color-palette-picker";
import {isPrbMode, prbModes, setDarkTheme, setDebugMode, setFixedFooter, toggleMode} from "@utility/prb-mode";
import {ProfileService} from "@services/profile.service";

@Component({
  selector: 'prb-header',
  imports: [
    MegaMenuModule,
    Button,
    Tooltip,
    NgOptimizedImage,
    ColorPalettePicker
  ],
  templateUrl: './prb-header.html',
  styleUrl: './prb-header.scss'
})
export class PrbHeader implements OnInit {

  private profileService = inject(ProfileService);
  // menuItems: MegaMenuItem[] | undefined;

  ngOnInit() {
    // this.menuItems = [
    // ]
  }

  isProductionEnvironment(): boolean {
    return isProduction();
  }

  isShowColorPalette(): boolean {
    return isPrbMode(prbModes.colorPicker);
  }

  toggleColorPicker() {
    toggleMode(prbModes.colorPicker);
  }

  isDarkTheme(): boolean {
    return isPrbMode(prbModes.dark);
  }

  darkTheme() {
    this.profileService.setDarkThemeProfile(true).subscribe(
    );
    setDarkTheme(true);
  }

  lightTheme() {
    this.profileService.setDarkThemeProfile(false).subscribe(
      result => console.log('Light theme set to: ', result)
    );
    setDarkTheme(false);
  }

  isDebug(): boolean {
    return isPrbMode(prbModes.debug);
  }

  setDebug(on: boolean) {
    this.profileService.setDebugProfile(on).subscribe(
      result => console.log('Debug mode set to: ', result)
    );
    setDebugMode(on);
  }

  isFixedFooter(): boolean {
    return isPrbMode(prbModes.fixedFooter);
  }

  fixed() {
    this.profileService.setFixedFooterProfile(true).subscribe(
      result => console.log('Fixed footer set to: ', result)
    );
    setFixedFooter(true);
  }

  floatng() {
    this.profileService.setFixedFooterProfile(false).subscribe(
      result => console.log('Floating footer set to: ', result)
    );
    setFixedFooter(false);
  }
}
