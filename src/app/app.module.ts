import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { YoutubePlayerModule } from 'ngx-youtube-player';

import { FormsModule } from '@angular/forms';
import {TransferHttpCacheModule} from '@nguniversal/common';

// import { YoutubePlayerModule } from 'ngx-youtube-player';

import {RouterModule} from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';

import { ArtistComponent } from './pages/artist/artist.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { SubmitDemoComponent } from './pages/submit-demo/submitDemo.component';
import { FooterComponent } from './components/footer/footer.component';
import { YtPlayerComponent } from './components/ytPlayer/ytPlayer.component';
import { YoutubePlayerServices } from './shared/services/youtubePlayer.service';
import { appValidatorService } from './shared/services/localValidator.service';
import { AppAlertComponent } from './components/appAlert/appAlertComponent';
import { BrightcovePlayerComponent } from './components/brightcovePlayer/brightcovePlayer.component';
import { ReleasesComponent } from './pages/releases/releases.component';
import { AkamaiPlayerComponent } from './components/akmPlayer/akmPlayer.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AboutComponent,
    Error404Component,
    HomeComponent,
    LoaderComponent,
    HeaderComponent,
    ReleasesComponent,
    SubmitDemoComponent,
    FooterComponent,
    YtPlayerComponent,
    AppAlertComponent,
    BrightcovePlayerComponent,
    AkamaiPlayerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'tarsier-app'}),
    routing,
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent, pathMatch: 'full'},
    //   { path: 'releases', component: ReleasesComponent, pathMatch: 'full'}
    // ]),
    TransferHttpCacheModule,
    FormsModule,
    YoutubePlayerModule
  ],
  providers: [appValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
