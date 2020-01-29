import { Injectable } from '@angular/core';
import { BaseApi } from './base-api';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsApiService extends BaseApi {
  header: HttpHeaders;
  url = "cards";
  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set('Content-type', 'application/json');
  }
  async getCards(url) {
    return await this.get(this.url, this.header).toPromise();
  }
  postCards (data) {
    return this.post(this.url, data, this.header).toPromise();
  }
  putCards (id: number, data) {
    return this.put(`${this.url}/${id}`, data, this.header).toPromise();
  }
  deleteCards (id: number) {
    return this.delete(`${this.url}/${id}`, this.header).toPromise();
  }
}

