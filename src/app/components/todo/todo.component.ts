import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { TodoService } from 'src/app/services/todoservices/todo.service';
import NoteEvent from './NoteEvent';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnChanges{

  @Input() noteId = "";
  noteText: string = "";

  isNoteCompleted: boolean = false;

  styling: Record<string, string> = {};

  constructor(private todoService:TodoService){}

  ngOnChanges(){
    let noteData = this.todoService.getNote(this.noteId);
    this.noteText = noteData.text;
    this.isNoteCompleted = noteData.isDone;

    //styling for custom attribute directive
    this.styling = {
      "border-color": this.isNoteCompleted ? "green" : "black",
      "border-width": "2px",
      "padding": "8px",
      "margin": "16px",
      "border-radius": "20px"
    };
  }

  markAsDone() {
    this.todoService.markAsDone(this.noteId);    
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.noteId);    
  }

}
