import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardRedditComponent } from './components/card/card-reddit/card-reddit.component';
import { CardTwitterComponent } from './components/card/card-twitter/card-twitter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardRedditComponent,
    CardTwitterComponent,
    DashboardComponent,
    SafePipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
