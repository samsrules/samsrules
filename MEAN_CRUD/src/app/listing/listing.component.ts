import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private http:HttpClient) { }
  catData;
  catt;
  error;
   
  ngOnInit() {
	const url="http://localhost:7788/list";
    this.http.get(url)
    .subscribe(res=>{
      this.catt=res;
      this.catData=this.catt.cdata
	  
    })
 }
  delCat(id)
  {
    var id_delete = id;
   const url="http://localhost:7788/deldata/"+id_delete;
   this.http.get(url)
   .subscribe(res=>{
	  //this.error = res.user; 
	  window.location.reload();
   });
  }
  

}
