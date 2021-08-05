import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../profile/types';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
})
export class ShowcaseComponent implements OnInit {
  @Input() projects: Project[];

  constructor() {}

  ngOnInit(): void {}
}
