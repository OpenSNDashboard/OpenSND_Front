import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dashboards: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // this.getAllDashboards();
    // console.log(this.dashboards);
  }

  getAllDashboards() {
    this.dashboardService.getAllDashboards().subscribe((data: any) => {
      this.dashboards = data;
    });
  }
}
