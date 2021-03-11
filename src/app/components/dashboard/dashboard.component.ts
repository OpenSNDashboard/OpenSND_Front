import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() feed: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getDashboard();
  }

  getDashboard() {
    this.feed = this.dashboardService.getDashboard();
  }
}
