import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { AuthorComponent } from './components/author/author.component';

//directives
import { DoneDirective } from './directives/done/done.directive';
import { CustomforDirective } from './directives/customfor/customfor.directive';
import { TodoService } from './services/todoservices/todo.service';
import { ListComponent } from './components/list/list.component';
import { NotecountComponent } from './components/notecount/notecount.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AuthorComponent,
    DoneDirective,
    CustomforDirective,
    ListComponent,
    NotecountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],  
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
