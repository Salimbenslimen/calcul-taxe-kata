export interface Produit {
  libelle: string;
  type: string;
  isImported: boolean;
  prixHT: number;
  prixTTC?: number;
  taxe?: number;
}
