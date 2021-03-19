import { Component, Input, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() feed: any;

  constructor(private feedService: FeedComponent) {}

  ngOnInit(): void {
    this.getFeed();
  }

  getFeed() {
    this.feed = this.feedService.getFeed();
  }
}
