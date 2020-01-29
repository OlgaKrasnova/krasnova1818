import { Injectable } from '@angular/core';
import { BaseApi } from './base-api';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessorsApiService extends BaseApi {
  header: HttpHeaders;
  url = "processors";
  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set('Content-type', 'application/json');
  }
  async getProcessors(url) {
    return await this.get(this.url, this.header).toPromise();
  }
  postProcessors (data) {
    return this.post(this.url, data, this.header).toPromise();
  }
  putProcessors (id: number, data) {
    return this.put(`${this.url}/${id}`, data, this.header).toPromise();
  }
  deleteProcessors (id: number) {
    return this.delete(`${this.url}/${id}`, this.header).toPromise();
  }
}

