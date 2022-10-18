import { Produit } from './produit.interface';

export interface Transaction {
  produit: Produit;
  quantite: number;
}
