import { Component, OnInit } from '@angular/core';
import { Profile } from './types';
import { profile } from './data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: Profile;

  ngOnInit(): void {
    this.profile = profile;
  }
}
