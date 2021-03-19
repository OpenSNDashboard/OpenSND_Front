import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
//Classe qui pour l'instant ne sert à rien
//Sera peut être utile plus tard pour des opérations communes aux 2 cards ?
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
