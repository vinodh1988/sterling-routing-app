import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:number=0;
record:any;
  constructor(private hs:HomeService,private route:ActivatedRoute) {
    route.params.subscribe(params=>
      this.id=params['id']);
      this.hs.getDetails(this.id).subscribe({
        next: (data)=>this.record = data,
        error: ()=>this.record={}
       }
      )
   }

  ngOnInit(): void {
  }

}
