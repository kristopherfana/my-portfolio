import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { ScrollTransformDirective } from './directives/scroll-transform.directive';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
@NgModule({
  imports: [
    HomeRoutingModule
  ],
  declarations: [
    ScrollTransformDirective,
    HomeComponent
  ]
})
export class HomeModule { }
