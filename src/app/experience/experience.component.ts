import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../modules/profile/types';
import { StylesClass } from '@angular-devkit/build-angular/src/browser/schema';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input() experiences: Experience;
  activeTabId = 0;
  highlighterStyles: any = { transform: `translateY(calc(0 * var(--tab-height)))` };

  constructor() {
    this.highlighterStyles = { transform: `translateY(calc(${this.activeTabId} * var(--tab-height)))` };
  }

  onCompanyClick(index: number): void {
    this.activeTabId = index;
    this.highlighterStyles = { transform: `translateY(calc(${this.activeTabId} * var(--tab-height)))` };
  }

  ngOnInit(): void {}
}
