import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class MyserService {
  constructor(private http:Http)
   { }
   getdata(url)
   {
     return this.http.get(url);
   }
   postdata(url,data)
   {
     return this.http.post(url,data);
   }

}
