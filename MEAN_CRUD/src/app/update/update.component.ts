import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  error;
  userId;
  update_listing;
  finallist;
  email_update;
  pass_update;
  updateList;
  updateid;
  user:any;
  myData={};
  
  constructor(private route: ActivatedRoute,private http:HttpClient) {
    this.route.params.subscribe( params => console.log(params) );
    this.userId = this.route.snapshot.params['id'];
    
    var id = this.userId;
	  const url="http://localhost:7788/updatedata/"+id;
	  this.http.get(url)
	  .subscribe(res=>{
      this.update_listing = res;
      this.finallist=this.update_listing.updateList;
      var data = this.finallist;
      for(let i=0;i<data.length;i++){
         this.email_update = data[i].email;
         this.pass_update = data[i].pass;
         this.updateid = data[i]._id;
      }
      
	  })
}



  ngOnInit() {
 
  }

  UpdateData(id){
    const url = "http://localhost:7788/listupdate/"+id;
    this.http.post(url,this.myData)
    .subscribe(res=>{
      console.log(res);
         this.error = res.user;
    })
  }

 

}
