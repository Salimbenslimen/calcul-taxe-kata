import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'paniers',
    loadChildren: () =>
      import('./panier/panier.module').then((m) => m.PanierModule),
  },
  {
    path: '**',
    redirectTo: 'paniers',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
