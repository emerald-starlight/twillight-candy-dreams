import { Component } from '@angular/core';
import { SkyComponent } from '../sky/sky.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  openCustomization() {
    alert("opened 🦄🪽")
  }
}
