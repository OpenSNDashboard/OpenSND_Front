import { Injectable } from '@angular/core';
import { FEED } from '../mock-feed';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  getDashboard() {
    return FEED;
  }
}
