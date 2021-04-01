import { Component, Input, OnInit } from '@angular/core';
import { CardTwitter } from 'src/app/model/card-twitter';

@Component({
  selector: 'app-card-twitter',
  templateUrl: './card-twitter.component copy.html',
  styleUrls: ['./card-twitter.component.scss'],
})
export class CardTwitterComponent implements OnInit {
  @Input() post!: any;
  @Input() embed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  isDictionaryEmpty(obj: any): boolean {
    console.log('la');
    return Object.keys(obj).length === 0;
  }
}
