// Import PLATFORM_ID and isPlatformBrowser
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // system default
  private theme: 'light' | 'dark' = 'light';
 // get the system default theme

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTheme();  // Only load theme if on the client-side
    }
  }

  toggleTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return; // Guard against server-side invocation

    this.theme = (this.theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', this.theme);
    this.updateBodyClass();
    alert(this.theme)
  }

  private loadTheme(): void {
    const storedTheme = localStorage.getItem('theme');
    this.theme = (window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? 'dark' : 'light')
    // this.theme = (storedTheme === 'light' || storedTheme === 'dark') ? storedTheme : this.theme;
    //update only if the stored theme is different from the system default
    // if (this.theme !== storedTheme) {
      this.updateBodyClass();
    // }
  }

  private updateBodyClass(): void {
    var body = document.body;
      const themeToRemove = this.theme === 'light' ? 'dark' : 'light';
      body.classList.remove(themeToRemove);
      body.classList.add(this.theme);

  }
}
