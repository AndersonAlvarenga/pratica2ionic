import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  link = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }
  
  async getPost() {
    return await this.http.get(this.link).toPromise();
  }
  async post(post){
    alert("comentario postado")
    return await this.http.post(this.link,post).toPromise();
  }
}
