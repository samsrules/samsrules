import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  constructor(private http:HttpClient) { }
myData={};
  data;
  error;
  Login()
  { 
    const url="http://localhost:7788/login";
    this.http.post(url,this.myData)
    .subscribe(res=>{
       this.data=res;
       if(this.data.err==0)
       {  
         this.error= this.data.user;
       }
       else
       { 
        this.error=this.data.user;
       }
    })
  }
  ngOnInit() {
  }

}
