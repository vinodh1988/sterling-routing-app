import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contactbox',
  templateUrl: './contactbox.component.html',
  styleUrls: ['./contactbox.component.css']
})
export class ContactboxComponent implements OnInit {
@Input("contact") current:any;
  constructor() { }

  ngOnInit(): void {
  }

}
