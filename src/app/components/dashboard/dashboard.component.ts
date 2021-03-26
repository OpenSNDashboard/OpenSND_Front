import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { FEED } from '../../mock-feed';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  feed: any;
  @Input() dashboard: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getFeed();
  }

  getFeed() {
    this.feed = FEED;
    //this.feed = this.dashboardService.getFeedFromDashboard(this.dashboard.id);
  }
}
