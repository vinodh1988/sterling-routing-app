import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedfilter'
})
export class FeedfilterPipe implements PipeTransform {
//the first parameter is target
// the second parameter is parameter
  transform(feedbacks: any[],type:string): any[] {
    if(type==="All")
        return feedbacks;
    else
        return feedbacks.filter((x)=>x.type===type)
  }

}
