import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    LoaderComponent,
    DropdownComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideNavComponent,
    HeaderComponent,
    DropdownComponent,
    FooterComponent,
    LoaderComponent,
    FormComponent,
    CommonModule
  ]
})
export class SharedModule { }
