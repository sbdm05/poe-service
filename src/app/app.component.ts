import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PicsService } from './services/pics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'newsApp';
  category: any;
  listeArticles!: any; // undefined
  spinnerOn: boolean = false;

  constructor(private picsService: PicsService) {}

  onSubmit(subject: string) {
    this.spinnerOn = true;
    //console.log(this.category);
    console.log('test');
    // appel
    // api key e743931a18e81262cac54dfe5af6daab
    this.picsService.getData(subject).subscribe((res) => {
      //this.listeArticles = res.results;
      this.spinnerOn = false;

      console.log(res.results, 'resresults')
      this.listeArticles = res.results;
      console.log(this.listeArticles);
    });
  }
}
