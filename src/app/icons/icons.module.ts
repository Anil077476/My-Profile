import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './github/github.component';
import { InstagramComponent } from './instagram/instagram.component';
import { LinkedInComponent } from './linked-in/linked-in.component';
import { TwitterComponent } from './twitter/twitter.component';
import { ExternalComponent } from './external/external.component';
import { LogoLoaderComponent } from './logo-loader/logo-loader.component';

@NgModule({
  declarations: [
    GithubComponent,
    InstagramComponent,
    LinkedInComponent,
    TwitterComponent,
    ExternalComponent,
    LogoLoaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    GithubComponent,
    LinkedInComponent,
    InstagramComponent,
    TwitterComponent,
    ExternalComponent,
    LogoLoaderComponent,
  ],
})
export class IconsModule {}
