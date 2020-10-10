import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-additemstoinventory',
  templateUrl: './additemstoinventory.component.html',
  styleUrls: ['./additemstoinventory.component.scss']
})
export class AdditemstoinventoryComponent implements OnInit {

  additemForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.additemForm = new FormGroup({
      'itemname': new FormControl(null, [Validators.required]),
      'qualityname': new FormControl(null),
       'merchant': new FormControl(null),
       'purchasedon': new FormControl(null),
       'costprice': new FormControl(null),
       'sellprice': new FormControl(null),
       'quantity': new FormControl(null),
       'unit': new FormControl(null)
    })
  }
}
