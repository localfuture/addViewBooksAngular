import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  onSubmit(data: NgForm) {
    console.log(data.value);
    this.apiservice.insertData(data.value).subscribe((Response: any)=>{
      console.log(Response);
      alert("Successfully inserted");
    })
  }

  ngOnInit() {
  }

}
