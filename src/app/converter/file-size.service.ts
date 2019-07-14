import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FileSizeService {
  private sizes: Array<string> = new Array<string>();

  constructor() { }

  getSizes(): Array<string> {
    return this.sizes;
  }

  addSize(todo: string) {
    this.sizes.push(todo);
  }
}
