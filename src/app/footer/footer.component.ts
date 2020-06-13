import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  data = {};

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.fetchPortfolioData().subscribe(d => {
      this.data = d;
    });
  }

}
