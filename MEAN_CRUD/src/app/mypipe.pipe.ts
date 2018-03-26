import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {
  transform(val,opt) 
  {
    if(opt==undefined)
    {
    return (val*val);
    }
  else
  {
    return (val+opt)
  }
  }

}
