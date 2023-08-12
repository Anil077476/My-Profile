import { Component, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent {
  webVisible = false;
  @Input() name: string;
  @Input() quickIntroduction: string;
  @Input() subIntroduction: string;

  options: AnimationOptions = {
    path: '/assets/lottie/tiger.json',
  };
  constructor() {
    setTimeout(() => (this.webVisible = true), 1000);
  }
}
