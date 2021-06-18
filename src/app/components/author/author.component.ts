import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todoservices/todo.service';
import { UserServices } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent{

  authorName: string = "";
  noteText:string="";

  constructor(private todoService:TodoService, private userServices:UserServices){}

  saveNote(){    
    this.todoService.saveNote(this.noteText, this.authorName);
    this.userServices.updateAuthor(this.authorName);
    
  }
}
