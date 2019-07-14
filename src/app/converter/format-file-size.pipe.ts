import { Pipe, PipeTransform } from '@angular/core';

const GB = 1000000;
const MB = 1000;
@Pipe({
  name: 'formatFileSize',
  pure: true
})
export class FormatFileSizePipe implements PipeTransform {
  transform(value: number, args?: any): string {
    let displaySize = '';
    if (value > GB) {
      displaySize = `${Math.floor(value / GB)} GB`;
    } else if (value > MB) {
      displaySize = `${Math.floor(value / MB)} MB`;
    } else {
      displaySize = `${value} KB`;
    }
    return displaySize;
  }
}
