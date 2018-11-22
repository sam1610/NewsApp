import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  News: any;

  constructor(private newsService: NewsService,
    private router: Router) { }

  ngOnInit() {
    this.newsService
      .getData('everything?q=bitcoin&from=2018-10-22&sortBy=publishedAt')
      .subscribe(
        data => this.News = data
      )
    }


    singlePage(article){
      this.newsService.currenrtArticle = article;
      this.router.navigate(['news-single']);
    }
  }

