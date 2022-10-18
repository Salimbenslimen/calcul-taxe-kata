import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrondiCinqCentSupPipe } from './pipes/arrondi-cinq-cent-sup.pipe';

@NgModule({
  declarations: [ArrondiCinqCentSupPipe],
  imports: [CommonModule],
  exports: [CommonModule, ArrondiCinqCentSupPipe],
  providers: [],
})
export class SharedModule {}
