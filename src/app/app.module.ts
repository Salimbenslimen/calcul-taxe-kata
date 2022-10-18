import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/ui/header/header.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
