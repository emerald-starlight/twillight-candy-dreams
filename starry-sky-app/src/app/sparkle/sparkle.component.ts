import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sparkle',
  standalone: true,
  imports: [],
  templateUrl: './sparkle.component.html',
  styleUrl: './sparkle.component.scss'
})
export class SparkleComponent {
  @Input() style: any;

  ngOnInit(): void {}
}
