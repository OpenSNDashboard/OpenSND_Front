import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

declare var twttr: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OpenSND';

  constructor() {}

  ngOnInit(): void {}
}
