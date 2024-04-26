import { Component, Input } from '@angular/core';
import { SkyComponent } from '../sky/sky.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ 
    // FormsModule, 
    SkyComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  @Input() count: number = 200;
  @Input() color: string = 'skyblue';
  @Input() size: number = 10;

  
  // constructor(private skyComponent: SkyComponent) {}

  updateSky(count: number, color: string, size: number): void {
    // this.skyComponent.generateSparkles(count);
    // Additional logic to update color and size
  }
}
