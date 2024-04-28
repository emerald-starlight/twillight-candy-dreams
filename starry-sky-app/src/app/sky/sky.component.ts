import { Component, Input } from '@angular/core';
import { SparkleComponent } from '../sparkle/sparkle.component';
// import { trigger, state, style, animate, transition } from '@angular/animations';
// import { BrowserAnimationsModule } from '@/angular/platform-browser/animations';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-sky',
  standalone: true,
  imports: [ NgFor, SparkleComponent,],
  templateUrl: './sky.component.html',
  styleUrl: './sky.component.scss',
})
export class SkyComponent {
  // default or input
  @Input() count = 100;
  
  sparkles: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.generateSparkles(this.count);
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
      animation: `twinkle ${animationDuration}s infinite ease-in-out`
    };
  }
  
}
