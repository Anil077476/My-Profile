import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
})
export class HeaderNavComponent implements OnInit {
  menuOpen = false;
  @Input() setSideMenuOpened: (menuOpen: boolean) => void;

  constructor(private host: ElementRef<HTMLElement>) {
    this.host.nativeElement.style.setProperty(`--menu-transform`, 'translateX(100vw)');
  }

  onHamburgerClick(): void {
    this.menuOpen = !this.menuOpen;
    this.setSideMenuOpened(this.menuOpen);
    setTimeout(
      () =>
        this.host.nativeElement.style.setProperty(
          `--menu-transform`,
          this.menuOpen ? 'translateX(0vw)' : 'translateX(100vw)'
        ),
      0
    );
  }

  ngOnInit(): void {}
}
