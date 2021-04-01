import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  host: string = 'http://localhost:5000/api/dashboards';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAllDashboards() {
    return this.http.get(this.host);
  }

  getDashboardById(id: number) {
    const url = `${this.host}/${id}`;

    return this.http.get(url);
  }

  //TODO : prendre en compte le parametre since
  getFeedFromDashboard(id: number, since: string = '') {
    const url = `${this.host}/${id}/content`;

    return this.http.get(url);
  }

  //TODO : Ajouter POST, PUT et DELETE
}
