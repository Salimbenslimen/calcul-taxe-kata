import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierContainerComponent } from './panier-container/panier-container.component';

export const routes: Routes = [
  {
    path: '',
    component: PanierContainerComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class PanierRoutingModule {}
