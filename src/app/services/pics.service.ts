import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PicsService {

  constructor(private http: HttpClient) {}

  getData(subject: any) {
    return this.http.get<any>(
      `https://api.unsplash.com/search/photos?page=1&query=${subject}&client_id=XenapBw_svKKnLEsJwwtJRcV4LqteP5IQDQ6r3EagHQ`
    );
  }
}
