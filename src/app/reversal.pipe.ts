import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversal'
})
export class ReversalPipe implements PipeTransform {

  transform(value) {
    if(!value)return;
    return value.reverse();
  }

}
