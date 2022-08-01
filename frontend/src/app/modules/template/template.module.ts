import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TemplateComponent, NavComponent, FooterComponent, HeaderComponent],
  exports: [TemplateComponent, NavComponent, FooterComponent, HeaderComponent]
})
export class TemplateModule { }
