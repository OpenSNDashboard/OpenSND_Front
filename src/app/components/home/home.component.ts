import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dashboardSelected: any = null;
  @ViewChild(DashboardComponent) child!: DashboardComponent;

  constructor() {}

  ngOnInit(): void {}

  newDashboardSelected(dashboardEvent: any) {
    console.log('newDashboardSelected');
    this.child.clearDashboard();
    this.child.reloadFeed(dashboardEvent);
  }
}
