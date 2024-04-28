import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings/settings.component';
import { ThemeService } from './theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // BrowserAnimationsModule, 
    RouterModule,
    CommonModule,
    SettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ThemeService]

})
export class AppComponent {
  title = 'starry-sky-app';
  constructor(public themeService: ThemeService) { }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
