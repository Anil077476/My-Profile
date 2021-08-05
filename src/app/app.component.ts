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
  private ExternalName: any;

  ngOnInit(): void {
    this.profile = profile;
    this.ExternalName = ExternalName;
  }

  setSideMenuOpened(open: boolean): void {
    this.sideMenuOpened = open;
  }
}
