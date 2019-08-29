import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  private mydata: Array<Object> = [];

  ngOnInit() {
    this.fetchData();
  }

  public fetchData() {
    this.apiservice.viewData().subscribe((response:Array<Object>)=>{
      console.log(response);
      this.mydata = response;
      
    })
  }


}
