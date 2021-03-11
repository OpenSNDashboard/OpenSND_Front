import { Component, Input, OnInit } from '@angular/core';
import { CardTwitter } from 'src/app/model/card-twitter';

@Component({
  selector: 'app-card-twitter',
  templateUrl: './card-twitter.component.html',
  styleUrls: ['./card-twitter.component.scss'],
})
export class CardTwitterComponent implements OnInit {
  @Input() post!: CardTwitter;

  constructor() {}

  ngOnInit(): void {}
}
