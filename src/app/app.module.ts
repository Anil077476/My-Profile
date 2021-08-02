import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { IntroductionComponent } from './modules/introduction/introduction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { RouterModule } from '@angular/router';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@NgModule({
  declarations: [AppComponent, ProfileComponent, IntroductionComponent, AboutMeComponent, ExperienceComponent, HeaderNavComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
