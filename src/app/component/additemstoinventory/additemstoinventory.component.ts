import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-additemstoinventory',
  templateUrl: './additemstoinventory.component.html',
  styleUrls: ['./additemstoinventory.component.scss']
})
export class AdditemstoinventoryComponent implements OnInit {

  additemForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
