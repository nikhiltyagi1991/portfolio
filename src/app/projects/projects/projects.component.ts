import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  data = {};

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.fetchPortfolioData().subscribe(d => {
      this.data = d;
    });
  }

  split(string: String) {
    return string.trim().split(',');
  }

  keys(obj: any) {
    return Object.keys(obj);
  }

}
