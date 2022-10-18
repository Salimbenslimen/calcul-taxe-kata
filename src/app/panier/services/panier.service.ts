import { Injectable } from '@angular/core';
import { Panier } from '../../core/domain/panier.interface';
import panierData from './produits.json';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public paniers: Panier[] = [];

  public getPaniers(): Panier[] {
    return panierData;
  }
}
