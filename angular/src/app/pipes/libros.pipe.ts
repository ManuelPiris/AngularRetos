import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libros'
})
export class LibrosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `Ref-${value}`;
  }

}
