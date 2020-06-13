import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data = {};

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.fetchPortfolioData().subscribe(d => {
      this.data = d;
    });
  }

}
