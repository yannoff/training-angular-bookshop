import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'deleteSpace'
})
export class DeleteSpacePipe implements PipeTransform {

    transform(value: string, ...args: any[]): string {
        return value.replace(' ', '');
    }

}
