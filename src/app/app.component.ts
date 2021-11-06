import { Component, OnInit } from '@angular/core';
import { ExternalName } from './profile/types';
import { Profile } from './models/profile';
import { profile } from './profile/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Tilak Puli';
  profile: Profile;
  sideMenuOpened: boolean;
  animationClass = '';
  private ExternalName: any;

  addScrollEvent(): void {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      // if at top
      if (scrollY > 50) {
        this.animationClass = scrollY > lastScrollY ? 'header-nav-show' : 'header-nav-hide';
      } else {
        this.animationClass = '';
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    window.addEventListener('scroll', onScroll);
  }

  ngOnInit(): void {
    this.profile = profile;
    this.ExternalName = ExternalName;
    this.addScrollEvent();
  }

  setSideMenuOpened(open: boolean): void {
    this.sideMenuOpened = open;
  }
}
