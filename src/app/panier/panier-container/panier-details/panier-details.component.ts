import { Component, Input } from '@angular/core';
import { Panier } from '../../../core/domain/panier.interface';

@Component({
  selector: 'app-panier-details',
  templateUrl: './panier-details.component.html',
  styleUrls: ['./panier-details.component.scss'],
})
export class PanierDetailsComponent {
  @Input() public panier: Panier;
}
