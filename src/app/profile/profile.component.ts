import { Component, Input, OnInit } from '@angular/core';
import { Profile } from './types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile;

  ngOnInit(): void {}
}
