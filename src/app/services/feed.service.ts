import { Injectable } from '@angular/core';
import { FEED } from '../mock-feed';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor() {}

  getFeed() {
    return FEED;
  }
}
