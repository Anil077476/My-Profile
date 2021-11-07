import { AfterViewInit, Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  bootUpLoadingDone: boolean;

  constructor() {
    this.bootUpLoadingDone = false;
  }

  ngAfterViewInit(): void {
    this.animate();
  }

  ngOnInit(): void {}

  animate(): void {
    const loader = anime.timeline();

    loader
      .add({
        targets: '#logo polygon',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#letter',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });

    loader.finished.then(() => (this.bootUpLoadingDone = true));
  }
}
