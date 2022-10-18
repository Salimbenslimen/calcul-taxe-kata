import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { PanierDetailsComponent } from './panier-container/panier-details/panier-details.component';
import { PanierListComponent } from './panier-container/panier-list/panier-list.component';
import { PanierRoutingModule } from './panier.routing';
import { PanierService } from './services/panier.service';

@NgModule({
  declarations: [
    PanierListComponent,
    PanierDetailsComponent,
    PanierContainerComponent,
  ],
  imports: [SharedModule, PanierRoutingModule],
  exports: [],
  providers: [PanierService],
})
export class PanierModule {}
