import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { DoneDirective } from './directives/done/done.directive';
import { CustomforDirective } from './directives/customfor/customfor.directive';
import { TodoService } from './services/todoservices/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DoneDirective,
    CustomforDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
