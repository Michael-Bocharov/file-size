import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FileSizeService } from './file-size.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  public placeholder = 'File size (kB)';


  @Output()
  newSize: any;

  constructor(private fileSizes: FileSizeService) {}

  ngOnInit() {
  }

  get sizes() {
    return this.fileSizes.getSizes();
  }

  addSize() {
    this.fileSizes.addSize(this.newSize);
    this.newSize = '';
  }
}
