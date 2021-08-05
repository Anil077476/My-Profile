import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { Experience } from '../../profile/types';
import Utils from '../../../Utlis';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  goto = Utils.goto;

  @Input() experiences: Experience;
  activeTabId = 0;

  constructor(private host: ElementRef<HTMLElement>) {
    this.host.nativeElement.style.setProperty(`--active-tab-id`, '0');
  }

  onCompanyClick(index: number, event: any): void {
    this.activeTabId = index;
    this.host.nativeElement.style.setProperty(`--active-tab-id`, index.toString());
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const tabWidth = this.host.nativeElement.getElementsByClassName('tab')[0].clientWidth;
    this.host.nativeElement.style.setProperty(`--tab-width`, tabWidth.toString() + 'px');
  }
}
