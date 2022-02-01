import { Component, Input } from '@angular/core';

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

  constructor() {
    setTimeout(() => (this.webVisible = true), 1000);
  }
}
