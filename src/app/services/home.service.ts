import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
httpOptions:any;
  constructor(private http:HttpClient) { }

  getObject():Observable<object>{
    return this.http.get("http://localhost:4500/services")
  }

  getDetails(id:number):Observable<object>{
    return this.http.get("http://localhost:4500/details/"+id)
  }

  
  getFeedbacks():Observable<object>{
    return this.http.get("http://localhost:4500/feedbacks")
  }

  postEnquiry(obj:any):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    return this.http.post("http://localhost:4500/enquiries",obj,this.httpOptions);
   }

   postReviews(obj:any):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    return this.http.post("http://localhost:4500/feedbacks",obj,this.httpOptions);
   }
}
