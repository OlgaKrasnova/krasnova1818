import { Injectable } from '@angular/core';
import { BaseApi } from './base-api';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotherboardsApiService extends BaseApi {
  header: HttpHeaders;
  url = "motherboards";
  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set('Content-type', 'application/json');
  }
  async getMotherboards() {
    return await this.get(this.url, this.header).toPromise();
  }
  postMotherboards (data) {
    return this.post(this.url, data, this.header).toPromise();
  }
  putMotherboards (id: number, data) {
    return this.put(`${this.url}/${id}`, data, this.header).toPromise();
  }
  deleteMotherboards (id: number) {
    return this.delete(`${this.url}/${id}`, this.header).toPromise();
  }
}

