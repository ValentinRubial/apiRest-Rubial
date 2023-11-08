import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  private apiUrl = 'https://65458ad1fe036a2fa95464c3.mockapi.io/users'; 

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.apiUrl + '/items');
  }

}
