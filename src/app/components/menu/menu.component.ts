import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  MatAccordionDisplayMode,
  MatAccordionTogglePosition,
} from '@angular/material/expansion';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dashboards: any;
  displayMode: MatAccordionDisplayMode = 'flat';

  @Output() newDashboardEvent = new EventEmitter<any>();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getAllDashboards();
    console.log(this.dashboards);
  }

  getAllDashboards() {
    this.dashboardService.getAllDashboards().subscribe((data: any) => {
      console.log('data :', data.dashboards);
      this.dashboards = data.dashboards;
    });
  }

  newDashboardSelected(dashboard: any) {
    this.newDashboardEvent.emit(dashboard);
  }
}
