import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { FEED } from '../../mock-feed';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  feed: any = null;
  @Input() dashboard: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {}

  reloadFeed(dashboard: any) {
    this.dashboardService
      .getFeedFromDashboard(dashboard.id)
      .subscribe((res: any) => {
        this.feed = res.data; //.filter((post: any) => post.type == 'twitter');
        console.log('this.feed', this.feed);
      });
  }

  clearDashboard() {
    console.log('dashboardCleared');
    this.feed = null;
  }
}
