import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './github/github.component';
import { InstagramComponent } from './instagram/instagram.component';
import { LinkedInComponent } from './linked-in/linked-in.component';
import { TwitterComponent } from './twitter/twitter.component';

@NgModule({
  declarations: [GithubComponent, InstagramComponent, LinkedInComponent, TwitterComponent],
  imports: [CommonModule],
  exports: [GithubComponent, LinkedInComponent, InstagramComponent, TwitterComponent],
})
export class IconsModule {}
