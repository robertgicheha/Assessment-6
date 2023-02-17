import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { StudentBalancePipe } from './student-balance-pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDisplayComponent,
    StudentBalancePipe  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
