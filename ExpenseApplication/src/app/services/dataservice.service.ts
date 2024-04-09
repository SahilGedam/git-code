import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  url = 'http://localhost:8080/';
  theme = 'theme';
  constructor(private http: HttpClient) {}

  // local storage
  public saveTheme(value: string) {
    window.localStorage.setItem(this.theme, value);
  }
  public getTheme() {
    return window.localStorage.getItem(this.theme);
  }

  // web api
  public getParticipants() {
    return this.http.get(`${this.url}getAllPaticipant`);
  }

  public addParticipant(participant: any) {
    return this.http.post(`${this.url}createParticipant`, participant, {
      responseType: 'text',
    });
  }

  public addExpense(expense: any) {
    return this.http.post(`${this.url}createExpense`, expense, {
      responseType: 'text',
    });
  }

  public getAllGroups() {
    return this.http.get(`${this.url}getAllGroups`);
  }

  public resetAll() {
    return this.http.get(`${this.url}settleAll`);
  }

  public getParticipantByUsername(data: any) {
    return this.http.get(`${this.url}getPaticipant/${data}`);
  }
}
