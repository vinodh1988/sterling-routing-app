import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getObject():Observable<object>{
    return this.http.get("http://localhost:4500/services")
  }

  getDetails(id:number):Observable<object>{
    return this.http.get("http://localhost:4500/details/"+id)
  }
}
