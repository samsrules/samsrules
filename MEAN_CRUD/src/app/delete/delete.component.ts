import { Component, OnInit,ElementRef } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private http:Http, public elem : ElementRef) { }

  resp:any=[];
  myData={email:'',password:''};
  imgfile:any;
  myReg:any={};
  send()
  {
    const url="http://localhost:7788/login";
  this.http.post(url,this.myData)
  .map(res=>res.json())
  .subscribe(res=>{
    this.resp=res;
    console.log(this.resp)
  })
  }
  onchangeImage(event) 
  {
    if(event.target.files && event.target.files.length>0) 
    {
      this.imgfile=event.target.files[0];
    }
  }
  register()
  {
    this.http.post('http://localhost:7788/regis', this.myReg).subscribe(res => {
        console.log(res);
      });
  }
    uploadImage(){
      let formdata = new FormData();
      formdata.append('selectFile', this.imgfile);
      formdata.append('email',this.myData.email);
      formdata.append('pass',this.myData.password);

      this.http.post('http://localhost:7788/uploadImg', formdata)
      .subscribe(res => {
        console.log(res);
      });
    }

  ngOnInit() {
  }

}
