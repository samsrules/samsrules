import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http:HttpClient){}
  myData={};
  data;
  error;
     
 insert()
  {
    const url="http://localhost:7788/insert";
    this.http.post(url,this.myData)
    .subscribe(res=>
      {
       this.data=res;
       if(this.data.err==0)
       {
            this.error= this.data.user;
       } else {
           this.error = this.data.user;
       }
    })
  }
  
  ngOnInit() {

  }

}
