import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormatFileSizePipe } from './converter/format-file-size.pipe';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatListModule} from '@angular/material';
import { BigFileDirective } from './converter/big-file.directive';


@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    FormatFileSizePipe,
    BigFileDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
