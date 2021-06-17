import { Injectable, } from '@angular/core';
import { Subject } from 'rxjs';
import NoteEvent from 'src/app/components/todo/NoteEvent';
import Note from 'src/app/components/todo/note';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private noteIdList: string[] = [];

  private todoSubject: Subject<NoteEvent> = new Subject();
  todoObservable = this.todoSubject.asObservable();

  constructor() {
    //list of id of notes
    let data = localStorage.getItem("note-ids");
    this.noteIdList = (data == null) ? [] : JSON.parse(data);
  }

  //save a note-text along with an id into localstorage
  saveNote(noteText: string): void {

    let noteId = String(new Date().getUTCMilliseconds());
    this.noteIdList.push(noteId);

    localStorage.setItem("note-ids", JSON.stringify(this.noteIdList));

    let noteData = { isDone: false, text: noteText };
    localStorage.setItem(noteId, JSON.stringify(noteData));
  }

  getNoteIds(): string[] {
    return this.noteIdList;    
  }

  //get particular note value for a given id
  getNote(noteId: string): Note {
    let data = localStorage.getItem(noteId);
    let noteData;

    if (data !== null) {
      noteData = JSON.parse(data);
    }
    return noteData;
  }

  //update isdone to true for the note object
  markAsDone(noteId: string) {

    let res = localStorage.getItem(noteId);
    if (res !== null) {
      let data = JSON.parse(res);
      data.isDone = true;
      localStorage.setItem(noteId, JSON.stringify(data));
    }

    let data: NoteEvent = {
      id: noteId,
      action: "done"
    };
    
    //send the value in subject behaviour to invoke the observer
    this.todoSubject.next(data);
  }

  //remove object from localstorage
  deleteTodo(noteId: string) {

    localStorage.removeItem(noteId);
    this.noteIdList = this.noteIdList.filter(id => (id !== noteId));
    localStorage.setItem("note-ids", JSON.stringify(this.noteIdList));

    let data = {
      id: noteId,
      action: "delete"
    };
    this.todoSubject.next(data);
  }

}
