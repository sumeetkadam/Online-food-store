import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
// import { NgxStarRatingModule } from 'ngx-star-rating';
// import { StarRatingModule } from 'angular-star-rating';
// import { RatingModule, StarRatingComponent } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxStarRatingModule,
    // StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
