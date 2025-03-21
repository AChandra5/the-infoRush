// theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteBackground {
    hero: string;
  }
  interface PaletteBackgroundOptions {
    hero?: string;
  }
}
