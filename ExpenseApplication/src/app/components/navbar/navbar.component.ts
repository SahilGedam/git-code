import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
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
constructor ( private dataService: DataserviceService){

}
  changeTheme() {
    if (this.currentTheme == 'light-theme') {
      this.currentTheme = 'dark-theme';
      this.matIcon = 'wb_sunny';
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
    } else if (this.currentTheme == 'dark-theme') {
      this.currentTheme = 'light-theme';
      this.matIcon = 'dark_mode';
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
    this.dataService.saveTheme(this.currentTheme);
  }
}
