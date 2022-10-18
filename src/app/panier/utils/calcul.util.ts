import { TypeProduitEnum } from '../const/TypeProduit.enum';
import { Produit } from '../../core/domain/produit.interface';

export class CalculUtil {
  private constructor() {}

  public static getTaxe(produit: Produit): number {
    let taxe: number = 0;
    if (
      TypeProduitEnum.NOURRITURE === produit.type ||
      TypeProduitEnum.MEDICAMENT === produit.type
    ) {
      if (produit.isImported) {
        taxe = (produit.prixHT * 5) / 100;
      }
    } else if (TypeProduitEnum.LIVRE === produit.type) {
      if (produit.isImported) {
        taxe = (produit.prixHT * 10) / 100 + (produit.prixHT * 5) / 100;
      } else {
        taxe = (produit.prixHT * 10) / 100;
      }
    } else if (TypeProduitEnum.AUTRES === produit.type) {
      if (produit.isImported) {
        taxe = (produit.prixHT * 20) / 100 + (produit.prixHT * 5) / 100;
      } else {
        taxe = (produit.prixHT * 20) / 100;
      }
    }
    return taxe;
  }

  public static getTaxeImport(produit: Produit): number {
    if (produit.isImported) {
      return (produit.prixHT * 5) / 100;
    } else {
      return 0;
    }
  }
}
