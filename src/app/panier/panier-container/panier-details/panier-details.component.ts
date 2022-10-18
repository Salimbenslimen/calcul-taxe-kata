import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/core/domain/transaction.interface';
import { Panier } from '../../../core/domain/panier.interface';

@Component({
  selector: 'app-panier-details',
  templateUrl: './panier-details.component.html',
  styleUrls: ['./panier-details.component.scss'],
})
export class PanierDetailsComponent {
  @Input() public panier: Panier;
}
