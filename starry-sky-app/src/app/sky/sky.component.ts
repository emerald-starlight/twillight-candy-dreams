import { Component } from '@angular/core';

@Component({
  selector: 'app-sky',
  standalone: true,
  imports: [],
  templateUrl: './sky.component.html',
  styleUrl: './sky.component.scss'
})
export class SkyComponent {
  sparkles: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateSparkles(200);
  }

  generateSparkles(count: number): void {
    for (let i = 0; i < count; i++) {
      this.sparkles.push(this.createSparkleStyle());
    }
  }

  private createSparkleStyle(): any {
    const size = Math.random() * 10 + 5; // Size between 5px and 15px
    const animationDuration = Math.random() * 5 + 5; // Duration between 5s and 10s
    return {
      width: `${size}px`,
      height: `${size}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      backgroundColor: 'skyblue', // Default color, customizable
      animation: `twinkle ${animationDuration}s infinite`
    };
  }
}
