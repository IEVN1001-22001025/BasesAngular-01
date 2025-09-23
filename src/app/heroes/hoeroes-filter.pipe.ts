import { Pipe, PipeTransform } from '@angular/core';
import { Iheroes } from './iheroes';

@Pipe({
  name: 'hoeroesFilter',
  standalone: false
})
export class HoeroesFilterPipe implements PipeTransform {

  transform(value:Iheroes[], args: string): Iheroes[] {
    let filter:string=args?args.toLocaleLowerCase():'';

    return filter?value.filter((hero:Iheroes)=>
    hero.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;
  }

}
