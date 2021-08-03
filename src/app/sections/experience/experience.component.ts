import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../../profile/types';
import Utils from '../../../Utlis';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  goto = Utils.goto;

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
