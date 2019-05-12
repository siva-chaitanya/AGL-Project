import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortfilter'
})
export class SortfilterPipe implements PipeTransform {

  transform(items: any[]): any[] {
    if(!items) return [];
    items.sort((n1,n2)=>{
      if(n1>n2){
        return 1;
      }
      if(n1<n2){
        return -1;
      }
      return 0;
    });
    return items;
  }

}
