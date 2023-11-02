import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    FeatureComponent,
  ],
  imports: [
    FeatureRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class FeatureModule { }
