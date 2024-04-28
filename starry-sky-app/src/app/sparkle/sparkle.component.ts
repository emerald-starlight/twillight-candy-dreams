// import { animate, style, transition, trigger } from '@angular/animations';
import {  NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sparkle',
  standalone: true,
  imports: [NgStyle, ],
  templateUrl: './sparkle.component.html',
  styleUrl: './sparkle.component.scss',
  animations: [
    // trigger('twinkle', [
    //   transition(':enter', [  // Use ':enter' to handle new elements entering the DOM
    //     style({ opacity: 0 }), // Initial state
    //     animate('5s', style({ opacity: 1 })), // Fade to fully visible
    //   ]),
    //   transition(':leave', [  // Optional: Handle exit animations
    //     animate('5s', style({ opacity: 0 }))
    //   ])
    // ])
  ]
})
export class SparkleComponent {
  @Input() style: any;

  ngOnInit(): void {}
  
}


