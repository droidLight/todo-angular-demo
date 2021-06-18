import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { TodoService } from 'src/app/services/todoservices/todo.service';
import NoteEvent from './NoteEvent';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnChanges{

  @Input() noteId = "";
  noteText: string = "";
  noteAuthor:string="";
  dateOfCreation:Date=new Date();

  isNoteCompleted: boolean = false;

  styling: Record<string, string> = {};

  constructor(private todoService:TodoService){}

  ngOnInit(){
    this.todoService.todoObservable.subscribe((data)=>{
      console.log("todoObservable");
      location.reload();
    });
  }

  ngOnChanges(){
    let noteData = this.todoService.getNote(this.noteId);
    this.noteText = noteData.note_text;
    this.isNoteCompleted = noteData.is_done;
    this.noteAuthor = noteData.author_name;
    this.dateOfCreation = noteData.creation_date;

    //styling for custom attribute directive
    this.styling = {
      "is_completed":this.isNoteCompleted?"done":"no",      
    };
  }

  markAsDone() {
    this.todoService.markAsDone(this.noteId);    
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.noteId, this.noteAuthor);    
  }

  openModal(){
    let data = prompt("Enter updated note");
    if(data !==null){
      this.todoService.updateNote(this.noteId, data);
    }    
  }
}
