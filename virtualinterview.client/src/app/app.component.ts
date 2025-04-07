import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoaderService } from './Shared/loader.service';
import { LoginService } from './Shared/login.service';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showWelcomeMessage = true;

  constructor(private router: Router, private http: HttpClient, private loaderService: LoaderService, private renderer: Renderer2, private login: LoginService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showWelcomeMessage = event.url === '/';
      }
    });
  }


  ngAfterViewInit() {
    this.loaderService.httpProgress().subscribe((status: boolean) => {
      if (status) {
        this.renderer.addClass(document.getElementById('boxs'), 'boxs');
      } else {
        this.renderer.removeClass(document.getElementById('boxs'), 'boxs');
      }
      if (status) {
        this.renderer.addClass(document.getElementById('spinner'), 'spinner');
      } else {
        this.renderer.removeClass(document.getElementById('spinner'), 'spinner');
      }
    });
  }

}
