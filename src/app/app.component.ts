import { Component, OnChanges, OnInit } from '@angular/core';
import { TodoService } from './services/todoservices/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  noteIds:string[] = [];
  noteText:string="";  

  constructor(private todoServices:TodoService){
    
    //update the note-ids list on delete and insert operations
    this.todoServices.todoObservable.subscribe((noteEvent)=>{
      this.noteIds = this.todoServices.getNoteIds();
      
      if(noteEvent.action==="done"){
        //reloads the entire page.
        //looking for alternate solution. using router??
        location.reload();
      }
    });
  }
  
  ngOnInit(){
    //get ids from the localstorage initially
    this.noteIds = this.todoServices.getNoteIds();            
  }

  addTodo(){
    this.todoServices.saveNote(this.noteText);    
  }



}
