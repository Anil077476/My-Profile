import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { IntroductionComponent } from './sections/introduction/introduction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { RouterModule } from '@angular/router';
import { HeaderNavComponent } from './sections/header-nav/header-nav.component';
import { IconsModule } from './icons/icons.module';
import { ShowcaseComponent } from './sections/showcase/showcase.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { AppComponent } from './app.component';

// Add these two
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Export this function
export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    IntroductionComponent,
    AboutMeComponent,
    ExperienceComponent,
    HeaderNavComponent,
    ShowcaseComponent,
    AppComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule, IconsModule, NgsRevealModule,
    LottieModule.forRoot({ player: playerFactory })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
