import { Component, OnInit } from '@angular/core';
import { contacts } from '../../data/dataitem'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactlist:any=contacts;
  constructor() { }

  ngOnInit(): void {
  }

}
