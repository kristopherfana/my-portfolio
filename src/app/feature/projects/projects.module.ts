import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
