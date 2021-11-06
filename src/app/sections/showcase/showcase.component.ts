import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../profile/types';
import { NgsRevealConfig } from 'ngx-scrollreveal';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
})
export class ShowcaseComponent implements OnInit {
  @Input() projects: Project[];
  @Input() revealConfig: NgsRevealConfig;

  constructor() {}

  ngOnInit(): void {}
}
