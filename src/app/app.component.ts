import { Component, OnInit } from '@angular/core';
import { ExternalName, Profile } from './profile/types';
import { profile } from './profile/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Tilak Puli';
  profile: Profile;
  private ExternalName: any;

  ngOnInit(): void {
    this.profile = profile;
    this.ExternalName = ExternalName;
  }
}
