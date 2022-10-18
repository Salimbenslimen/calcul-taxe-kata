import { Transaction } from './transaction.interface';

export interface Panier {
  transactions: Transaction[];
  taxeTotale?: number;
  totale?: number;
}
