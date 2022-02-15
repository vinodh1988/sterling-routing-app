import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
services:any;
  constructor(private hs:HomeService) { }
   
  ngOnInit(): void {
      this.hs.getObject().subscribe({
        next: (data:any)=>this.services=data,
        error: (error:any)=>this.services=[]
      }
      )
  }


}
