import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  insertData(data){
    return this.http.post("http://localhost:3000/addBooks",data);
  }

  viewData(){
    return this.http.get("http://localhost:3000/viewBooks");
  }
}
