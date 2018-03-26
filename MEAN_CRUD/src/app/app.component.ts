import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient){}
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

  List()
  {   
    const url="http://localhost:7788/list";
    this.http.get(url,this.myData)
    .subscribe(res=>{
      this.data=res;
    })
  }

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
 
}
