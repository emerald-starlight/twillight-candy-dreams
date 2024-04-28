import { Component } from '@angular/core';
import { SkyComponent } from '../sky/sky.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [SkyComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
