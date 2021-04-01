import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dashboardSelected: any = null;

  constructor() {}

  ngOnInit(): void {}

  newDashboardSelected(dashboardEvent: any) {
    console.log('dashboardEvent :', dashboardEvent);
  }
}
