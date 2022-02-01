import { Component, Input, OnInit } from '@angular/core';
import { About } from '../../profile/types';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  @Input() about: About;

  constructor() {}

  ngOnInit(): void {}
}
