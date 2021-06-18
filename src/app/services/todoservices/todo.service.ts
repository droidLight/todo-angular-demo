import { Injectable, } from '@angular/core';
import { Subject } from 'rxjs';
import NoteEvent from 'src/app/components/todo/NoteEvent';
import Note from 'src/app/components/todo/note';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private noteIdList: string[] = [];

  private listSubject: Subject<NoteEvent> = new Subject();
  listObservable = this.listSubject.asObservable();

  private todoSubject: Subject<NoteEvent> = new Subject();
  todoObservable = this.todoSubject.asObservable();

  constructor() {}

  //save a note-text along with an id into localstorage
  saveNote(noteText: string, authorName:string): void {

    let noteId = String(new Date().getUTCMilliseconds());
    let date = new Date();

    let noteData={
      id:noteId,
      creation_date:date,
      note_text:noteText,
      author_name:authorName,
      is_done:false
    };
    this.getNoteIds(authorName);

    this.noteIdList.push(noteId);

    //saving note-id list for specific user
    localStorage.setItem(authorName, JSON.stringify(this.noteIdList));

    //saving the note itself
    localStorage.setItem(noteId, JSON.stringify(noteData));
    this.listSubject.next();
  }

  getNoteIds(authorName:string): string[] {

    //list of id of notes
    let data = localStorage.getItem(authorName);
    this.noteIdList = (data == null) ? [] : JSON.parse(data);
    return [...this.noteIdList];    
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
      data.is_done = true;
      localStorage.setItem(noteId, JSON.stringify(data));
    }

    let data: NoteEvent = {
      id: noteId,
      action: "done"
    };
    
    //send the value in subject behaviour to invoke the observer
    this.todoSubject.next();
  }

  //remove object from localstorage
  deleteTodo(noteId: string, authorName:string) {

    localStorage.removeItem(noteId);
    this.noteIdList = this.noteIdList.filter(id => (id !== noteId));
    localStorage.setItem(authorName, JSON.stringify(this.noteIdList));

    let data = {
      id: noteId,
      action: "delete"
    };
    this.todoSubject.next();
  }

  updateNote(noteId:string, newNote:string){
    let note = this.getNote(noteId);
    note.note_text = newNote;
    localStorage.setItem(noteId, JSON.stringify(note));
    this.todoSubject.next();
  }
}
