import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Panier } from '../../../core/domain/panier.interface';

@Component({
  selector: 'app-panier-list',
  templateUrl: './panier-list.component.html',
  styleUrls: ['./panier-list.component.scss'],
})
export class PanierListComponent {
  @Input() public paniers: Panier[];

  @Output() private changePanier: EventEmitter<number> = new EventEmitter();

  public panierClicked(index: number): void {
    this.changePanier.emit(index);
  }
}
