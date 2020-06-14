import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data = {};

  constructor(private portfolioService: PortfolioService,
    public router: Router) { }

  ngOnInit(): void {
    this.portfolioService.fetchPortfolioData().subscribe(d => {
      this.data = d;
    });
  }

  check(element) {
    console.log(this.router.url);
  }

}
