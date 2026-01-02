import {inject, Injectable} from '@angular/core';
import {PRIME_NG_CONFIG, PrimeNGConfigType} from "primeng/config";

export interface Preset {
  preset: {
    primitive: Record<string, Record<number, string>>
    semantic: {
      colorScheme: {
        dark: {
          surface: Record<number, string>
        },
        light: {
          surface: Record<number, string>
        }
      }
      primary: Record<number, string>
    }
  }
}

export type PrbTint = Record<string, Record<number, string>>;

@Injectable({
  providedIn: 'root'
})
export class PrimengConfigService {

  theme = (inject(PRIME_NG_CONFIG) as PrimeNGConfigType).theme as Preset;

  getPalette(): PrbTint {
    const {borderRadius, ...colorOnly} = (this.theme as Preset).preset.primitive;
    return colorOnly;
  }

  getSurfaceColor(theme: 'dark' | 'light'): PrbTint {
    return (this.theme as Preset).preset.semantic.colorScheme[theme].surface;
  }

  getPrimaryColor(): PrbTint {
    return (this.theme as Preset).preset.semantic.primary;
  }
}
