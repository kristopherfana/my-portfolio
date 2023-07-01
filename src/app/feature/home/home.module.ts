import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollListComponent } from './components/infinite-scroll-list/infinite-scroll-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    InfiniteScrollListComponent
  ],
  imports: [
    HomeRoutingModule,
    ScrollingModule
  ]
})
export class HomeModule { }
