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
  tweetsId = [20, 21, 22, 23, 5000, 46581, 75315, 463440424141459456n];

  ngAfterViewInit(): void {
    this.loadTimeline();
  }

  loadTimeline() {
    this.tweetsId.forEach((element) => {
      twttr.widgets.createTweet(
        element.toString(),
        document.getElementById('timeline'),
        {
          align: 'center',
          lang: 'fr',
        }
      );
    });
  }
}
