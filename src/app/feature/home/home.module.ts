import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { InfiniteScrollListComponent } from './components/infinite-scroll-list/infinite-scroll-list.component';



@NgModule({
  declarations: [
    InfiniteScrollListComponent
  ],
  imports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
