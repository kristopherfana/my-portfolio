import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path: '**', redirectTo: '/feature' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: "/my-portfolio/"
  }]
})
export class AppRoutingModule { }
