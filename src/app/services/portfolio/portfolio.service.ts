import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url = 'assets/portfolio.json';

  constructor(private http: HttpClient) {
  }

  fetchPortfolioData() {
    return this.http.get(this.url);
  }
}
