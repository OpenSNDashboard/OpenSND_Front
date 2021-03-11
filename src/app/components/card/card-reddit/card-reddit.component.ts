import { Component, Input, OnInit } from '@angular/core';
import { CardReddit } from 'src/app/model/card-reddit';
import { CardComponent } from '../card.component';

@Component({
  selector: 'app-card-reddit',
  templateUrl: './card-reddit.component.html',
  styleUrls: ['./card-reddit.component.scss'],
})
export class CardRedditComponent extends CardComponent implements OnInit {
  @Input() post!: CardReddit;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
