import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentTheme: string = 'dark-theme';
  matIcon = 'wb_sunny';
  temp: any;
  ngOnInit(): void {
    this.temp = this.dataService.getTheme();
    if (this.temp) {
      this.currentTheme = this.temp;
      document.documentElement.classList.add(this.currentTheme);
    }
  }
constructor ( private dataService: DataServiceService){

}
  changeTheme() {
    console.log(this.currentTheme);
    
    if (this.currentTheme == 'light-theme') {
      this.currentTheme = 'dark-theme';
      this.matIcon = 'wb_sunny';
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
      // console.log(document.documentElement.classList);
      
    } else if (this.currentTheme == 'dark-theme') {
      this.currentTheme = 'light-theme';
      this.matIcon = 'dark_mode';
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
      // console.log(document.documentElement.classList);
    }
    this.dataService.saveTheme(this.currentTheme);
  }
}
