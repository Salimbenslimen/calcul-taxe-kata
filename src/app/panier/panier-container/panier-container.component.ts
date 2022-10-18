import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/domain/transaction.interface';
import { Panier } from '../../core/domain/panier.interface';
import { Produit } from '../../core/domain/produit.interface';
import { PanierService } from '../services/panier.service';
import { CalculUtil } from '../utils/calcul.util';

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss'],
})
export class PanierContainerComponent implements OnInit {
  paniers: Panier[];
  public selectedPanier: Panier;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.paniers = this.panierService.getPaniers();
    this.initData(this.paniers[0]);
    this.selectedPanier = this.paniers[0];
  }

  public selectPanier(index: number): void {
    this.initData(this.paniers[index]);
    this.selectedPanier = this.paniers[index];
  }

  private initData(panier: Panier): void {
    this.addTaxes(panier);
    this.initMontants(panier);
  }

  private addTaxes(panier: Panier): void {
    for (let produitAchete of panier.transactions) {
      produitAchete.produit.taxe = CalculUtil.getTaxe(produitAchete.produit);
    }
  }

  public initMontants(panier: Panier) {
    let taxeTotale = 0;
    let totale = 0;
    for (let transaction of panier.transactions) {
      // calcul prixTTC
      this.initProduitPrixTTC(transaction);

      // calcul somme totale des taxes
      taxeTotale =
        taxeTotale +
        (transaction.produit.taxe
          ? transaction.produit.taxe * transaction.quantite
          : 0);

      //calcul de la somme totale

      totale =
        totale +
        (transaction.produit.prixTTC ? transaction.produit.prixTTC : 0);
    }

    panier.taxeTotale = taxeTotale;
    panier.totale = totale;
  }

  public initProduitPrixTTC(transaction: Transaction) {
    let prixTTC = transaction.produit.taxe
      ? transaction.produit.prixHT + transaction.produit.taxe
      : transaction.produit.prixHT;

    transaction.produit.prixTTC = prixTTC * transaction.quantite;
  }
}
