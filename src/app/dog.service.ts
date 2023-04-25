import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  //Injetando o HttpClient
  constructor( private http: HttpClient) {}

  getDog() : Observable<Dog> {
    return this.http.get<Dog>("https://dog.ceo/api/breeds/image/random");
  }
}
