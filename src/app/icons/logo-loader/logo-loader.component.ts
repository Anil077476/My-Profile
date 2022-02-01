import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-loader',
  template: `
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
      <title>Logo</title>
      <g transform="translate(-8.000000, -2.000000)">
        <g id="shape" transform="translate(11.000000, 5.000000)">
          <polygon
            fill="#020c1b"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            points="39 0 0 22 0 67 39 90 78 68 78 23"
          ></polygon>
          <text id="letter" x="18" y="65" fill="currentColor" font-size="52px">T</text>
        </g>
      </g>
    </svg>
  `,
  styleUrls: ['./logo-loader.component.css'],
})
export class LogoLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
