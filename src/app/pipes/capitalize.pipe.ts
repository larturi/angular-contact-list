import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {

    let finalString = '';
    // Parto la cadena en espacios y lo recorro
    for(const str of value.split(' ')){
      // Pongo en mayuscula la primera letra de cada cadena
      finalString += str.trim().charAt(0).toUpperCase() + str.slice(1) + ' ';
    }
    return finalString;

  }

}
