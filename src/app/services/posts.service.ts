import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost, IUser} from "../models";


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient:HttpClient) { }

  getUserPosts(id: number) :Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url + '?userId=' + id);
  }
}
