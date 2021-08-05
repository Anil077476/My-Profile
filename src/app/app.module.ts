import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { IntroductionComponent } from './sections/introduction/introduction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { RouterModule } from '@angular/router';
import { HeaderNavComponent } from './sections/header-nav/header-nav.component';
import { IconsModule } from './icons/icons.module';
import { ShowcaseComponent } from './sections/showcase/showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    IntroductionComponent,
    AboutMeComponent,
    ExperienceComponent,
    HeaderNavComponent,
    ShowcaseComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
